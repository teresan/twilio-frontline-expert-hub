exports.handler = async function (context, event, callback) {
  const twilio = context.getTwilioClient();

  let selectedWorker = Math.random() == 0 ? 'tnascimento+frontline@twilio.com' : 'aandresdelvalle+frontline@twilio.com';
  
  //delete this line for random selection of workers
  selectedWorker = 'tnascimento+frontline@twilio.com';

  await twilio.conversations
    .conversations(event.ConversationSid)
    .participants
    .create({ identity: selectedWorker })
    .then(participant => console.log('Create agent participant: ', participant.sid))
    .catch(e => console.log('Create agent participant: ', e));

  return callback(null, event.ConversationSid);
}