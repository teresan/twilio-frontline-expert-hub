const axios = require('axios')

const getCustomerProxyAddress = (channelName, channelAddress, context) => {
  if (channelName === 'whatsapp') {
      return 'whatsapp:+555555';
  } else if (channelName === 'sms') { 
      if(channelAddress.includes('+33'))
          return context.FRONTLINE_PROXY_NUMBER_FR;
      else if(channelAddress.includes('+44'))
          return context.FRONTLINE_PROXY_NUMBER_UK;
  }

};

exports.handler = async function (context, event, callback) {
  const client = context.getTwilioClient();
  console.log("rdf0: "+client);
  const crm = require(Runtime.getFunctions()['crm'].path);
  console.log("rdf1: "+crm);
  console.log("rdf2: "+event.From);
  const participant = await crm.fetch(event.From, context.DB_URL);  // --> OPTION WHEN WHE DO NOT HAVE IT IN THE DB!!
    //TODO error handling participant not found
  console.log("rdf3: "+JSON.stringify(participant));
  const workerIdentity = context.workerEmail;
  //create conversation
  const conversation = await client.conversations.conversations.create({
    messagingServiceSid: context.FRONTLINE_MESSAGING_SERVICE,
    friendlyName: `${participant.display_name} - Bot`
  });
  console.log("rdf4: "+conversation.sid);

  //TODO fix participant avatar not showing in app
  //TODO fix participant crm details from conversation with error in app
  let selectedWorker = "";
  if (workerIdentity)  
  {
    //TODO check that it actually is part of frontline 
    //If it is
    selectedWorker = 'workerIdentity';

  }else{
    selectedWorker = 'aandresdelvalle+frontline@twilio.com'; //TODO --> Random 
  }
  //delete this line for random selection of workers
  await client.conversations
    .conversations(conversation.sid)
    .participants
    .create({ identity: selectedWorker })
    .then(participant => console.log('Create agent participant: ', participant.sid))
    .catch(e => console.log('Create agent participant: ', e));

  await client.conversations.conversations(conversation.sid)
    .messages
    .create({ author: 'system', body: 'Here goes all the info from the previous conversation' }); //pass the person
   

 await client.conversations.conversations(conversation.sid)
 .participants
 .create({
   'messagingBinding.address': participant.channels[0].value, //SMS --> What about Whatsapp
   'messagingBinding.proxyAddress': getCustomerProxyAddress(participant.channels[0].type,participant.channels[0].value,context),
   'attributes': {
       avatar: participant.avatar,
       customer_id: participant.customer_id,
       display_name: participant.display_name
   } 
 });

 

//add participant by attendee number
  //call frontline routing --> we need to change it to cater for prior conversation --> routing will give you who to connect to the logic, and the previous conversation
//call frontline routing 
const routing = require(Runtime.getFunctions()['routing'].path);
newEvent = {ConversationSid: conversation.sid, ByPass: true};
return routing.handler(context, newEvent, callback);
};