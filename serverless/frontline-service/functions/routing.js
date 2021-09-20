exports.handler = async function (context, event, callback) {
  const twilio = context.getTwilioClient();

  console.log("ROUTING "+ JSON.stringify(event));
  //if the customer has not been matched to any worker

  const result =  await twilio.conversations.conversations(event.ConversationSid)
      .participants
      .list({limit: 20});
  
  console.log(JSON.stringify(result));
/*
  const participants = result.participants
  participants.forEach(p => console.log(p.sid))
*/
  //bot exchanges
    
  await twilio.conversations.conversations(event.ConversationSid)
  .messages
  .create({ author: 'system', body: 'If you know the email you want to connect, send it our way.' });

    
  let selectedWorker = Math.random() == 0 ? 'tnascimento+frontline@twilio.com' : 'aandresdelvalle+frontline@twilio.com';
  
  //delete this line for random selection of workers
  selectedWorker = 'aandresdelvalle+frontline@twilio.com';
  await twilio.conversations
    .conversations(event.ConversationSid)
    .participants
    .create({ identity: selectedWorker })
    .then(participant => console.log('Create agent participant: ', participant.sid))
    .catch(e => console.log('Create agent participant: ', e));

  return callback(null, event.ConversationSid);
}