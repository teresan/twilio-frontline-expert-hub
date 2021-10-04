
exports.handler = async function (context, event, callback) {
   console.log("PreEvent " + JSON.stringify(event));
   
   const twilio = context.getTwilioClient();

    const crm = require(Runtime.getFunctions()['crm'].path);
    console.log(event['MessagingBinding.Address']);

    if (event['MessagingBinding.Address']) {
        crm.fetch(event['MessagingBinding.Address'], context.DB_URL).then(participant => {
            console.log(`participant ${participant}`);
            callback(null, {
                friendly_name: participant.display_name,
                attributes: JSON.stringify({ avatar: participant.avatar })
            });

        }).catch(e => {
            console.log(e);
            callback("this is an error " + e);

        });

    }
    //Catch MessageAdd event to channel to BOT
    console.log(event['Body'])

    let message = event['Body'];

    if(event['EventType']=='onMessageAdd' && event['Source']!='SDK'){  //only acting on customer's messages
        const speakToBot = require(Runtime.getFunctions()['speakToBot'].path);

        let reply = speakToBot(message, event['Author']);

                          
        await twilio.conversations.conversations(event['ConversationSid'])
                     .messages
                    .create({ author: 'system', body:  reply.message}); //pass the person

        if(reply.route == 'yes'){ //


            let selectedWorker = await getLastFrontLineUser(twilio, event['Author'], event['ConversationSid']);

            if (!selectedWorker) {
                selectedWorker = getFirstAvailableWorker();
            }
            const crm = require(Runtime.getFunctions()['crm'].path);
           
            const participant = await crm.fetch(event['Author'], context.DB_URL);  // --> OPTION WHEN WHE DO NOT HAVE IT IN THE DB!!
            //TODO error handling participant not found
            //--> BOT can ask THE participants name before
            let name = "UNKNOWN"

            if(participant.display_name) {
                name = participant.display_name
            }
            //update conversation name
            await twilio.conversations
                .conversations(event['ConversationSid']).
                update({ friendlyName: `${name}`
            });
        
            await twilio.conversations
                .conversations(event['ConversationSid'])
                .participants
                .create({ identity: selectedWorker })
                .then(participant => console.log('Create agent participant: ', participant.sid))
                .catch(e => console.log('Create agent participant: ', e));

            return callback(null, event['ConversationSid']);
        }
        




    }
    else
        callback(null);
}

let getLastFrontLineUser = async (twilio, user, thisConversation) => {

    //fetch participant conversations
    let previousConversations = await twilio.conversations.participantConversations
      .list({ address: user });
  
    if (!previousConversations) return;
  
    //find last conversation
    let lastCreatedDate = new Date(-8640000000000000);  // min Date
    let lastConversationSid;
    previousConversations.forEach(p => {
      if (p.conversationSid !== thisConversation && lastCreatedDate < p.conversationDateCreated) {
        lastCreatedDate = p.conversationDateCreated;
        lastConversationSid = p.conversationSid;
      }
    });
  
    console.log(lastConversationSid);
  
    //fetch frontline user from last conversation
    let participants = await twilio.conversations.conversations(lastConversationSid).participants
      .list();
  
    let lastFrontLineUser;
    participants.some(p => {
      lastFrontLineUser = p.identity;
      return (p.identity);
    });
  
    console.log(`lastFrontlineUser:${lastFrontLineUser}`);
    return lastFrontLineUser;
  }
  
  let getFirstAvailableWorker = () => {
    // TODO implement this, taskrouter workers
    return 'aandresdelvalle+frontline@twilio.com';
    // return Math.random() == 0 ? 'tnascimento+frontline@twilio.com' : 'aandresdelvalle+frontline@twilio.com';
  }


/* 

SMS IN

PreEvent {"RetryCount":"0","EventType":"onMessageAdd","Attributes":"{}","Author":"+33679571533",
"ParticipantSid":"MB179368a880db4e3bb63525e0007c0647","Body":"Hi","AccountSid":"ACe52ed5e7a44191a623117158a4feeca1",
"Source":"SMS","ConversationSid":"CH6546805a622342789723eb3b3a42da13"}


1. PreEvent: onConversationAdd

{"MessagingServiceSid":"MGaabc851414764527f5cd13542b39dcba","RetryCount":"0","EventType":"onConversationAdd",
"State":"active","Attributes":"{}","ChatServiceSid":"IS83fd12a19a6c49f09c12f57d1a2703b4","MessagingBinding.ProxyAddress":"+33757590443",
"MessagingBinding.Address":"+33679571533","AccountSid":"ACe52ed5e7a44191a623117158a4feeca1","Source":"SMS","MessageBody":"Hello"}

FOR ALL: PreEvents: fetch participant client data

2. Routing:
Resolving
Create agent participant 

3. PostEvent: onParticipantAdded

{"RoleSid":"RLe2d419760f594274924caf983e46f8cb","RetryCount":"0","EventType":"onParticipantAdded","Attributes":"{}","DateCreated":"2021-09-29T15:51:18.516Z",
"MessagingBinding.Type":"sms","MessagingBinding.ProxyAddress":"+33757590443","ParticipantSid":"MB743eb34d8b304f94a76c784ebae4ef61","MessagingBinding.Address":"+33679571533",
"AccountSid":"ACe52ed5e7a44191a623117158a4feeca1","Source":"SMS","ConversationSid":"CH197f8846632741f9a7d53557122c0138"}

FOR ALL EVENTS: fetchParticipant client data

How fetch works
fetch: +33679571533
2021-09-29 15:51:19 UTC
retrieveCustomers: https://expert-hub.herokuapp.com
2021-09-29 15:51:19 UTC
retrieveCustomers: data
2021-09-29 15:51:19 UTC
retrieveCustomers: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjMyOTMwNjc5LCJleHAiOjE2MzU1MjI2Nzl9.WovmxYV4dtR1VgBUd8fwGOdYwS8fTjJrZv3vpl4MYPI
2021-09-29 15:51:19 UTC
fetch: [{"id":1,"display_name":"Maria Sanchez","customer_id":"1","avatar":"https://cinnabar-albatross-5407.twil.io/assets/face2.jpeg","created_by":{"id":1,"firstname":"Ana","lastname":"Andres","username":null},"updated_by":{"id":1,"firstname":"Ana","lastname":"Andres","username":null},"created_at":"2021-08-06T11:38:39.962Z","updated_at":"2021-08-06T11:38:40.062Z","channels":[{"id":1,"type":"sms","value":"+33679571533"},{"id":2,"type":"email","value":"aandresdelvalle@twilio.com"}]},{"id":2,"di...
2021-09-29 15:51:19 UTC

AGENT REPLIES

1. PreEvent: onMessageAdd
PreEvent {"ClientIdentity":"aandresdelvalle+frontline@twilio.com","RetryCount":"0","EventType":"onMessageAdd",
"Attributes":"{\"messageId\":\"wmQX2pcekHUVk4SAchWwk\"}","Author":"aandresdelvalle+frontline@twilio.com",
"ParticipantSid":"MB42a66918d13442eba91180acf3ef2b55","Body":"Hi","AccountSid":"ACe52ed5e7a44191a623117158a4feeca1","Source":"SDK","ConversationSid":"CH197f8846632741f9a7d53557122c0138"}

Not binding.Address

REPLY FROM CUSTOMER

1. PreEvent: onMessageAdd

PreEvent {"RetryCount":"0","EventType":"onMessageAdd","Attributes":"{}","Author":"+33679571533",
"ParticipantSid":"MB743eb34d8b304f94a76c784ebae4ef61","Body":"How are you?",
"AccountSid":"ACe52ed5e7a44191a623117158a4feeca1","Source":"SMS","ConversationSid":"CH197f8846632741f9a7d53557122c0138"}
2021-09-29 16:10:33 UTC
null

*/