exports.handler = async function (context, event, callback) {
  const bot = require(Runtime.getFunctions()['speakToBot'].path);

  let language = await bot.getLanguage(context);
  let intro = await bot.getCopy('intro', language, context);

  //no routing here, only bot welcome
  await context.getTwilioClient()
    .conversations
    .conversations(event['ConversationSid'])
    .messages
    .create({ author: 'system', body: intro });

  return callback(null, 200);
}