exports.handler = async function (context, event, callback) {
  const copy = require(Runtime.getFunctions()['getCopy'].path);

  let intro = await copy.getCopy('intro', context);

  //no routing here, only bot welcome
  await context.getTwilioClient()
    .conversations
    .conversations(event['ConversationSid'])
    .messages
    .create({ author: 'system', body: intro });

  return callback(null, 200);
}