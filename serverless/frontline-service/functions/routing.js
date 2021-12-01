exports.handler = async function (context, event, callback) {

  //no routing here, only bot welcome
  await context.getTwilioClient()
    .conversations
    .conversations(event['ConversationSid'])
    .messages
    .create({ author: 'system', body: 'Welcome to the Expert Hub. How can I help you?' });

  return callback(null, 200);
}