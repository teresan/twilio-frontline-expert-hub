
exports.handler = async function (context, event, callback) {
  if(event.ByPass){
    return callback(null); //we do not do anything - all sorted in prior call - just to keep consistency with programming

  }
  
  const twilio = context.getTwilioClient();
  let user = event['MessagingBinding.Address'];

  await twilio.conversations.conversations(event['ConversationSid'])
  .messages
  .create({ author: 'system', body: 'Welcome to the Expert Hub. How are you today?' }); //pass the person
 
  return callback(null);

    //routing deferred to pre-event as an escalation from the BOT exchange
  
}
