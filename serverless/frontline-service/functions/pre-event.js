
exports.handler = async function (context, event, callback) {
  const twilio = context.getTwilioClient();

  if (event['EventType'] === 'onMessageAdd' && event['Source'] != 'SDK') {

    let participants = await twilio
      .conversations
      .conversations(event['ConversationSid'])
      .participants
      .list();

    if (participants.length > 1) {
      callback(null, 'All participants added');

    } else {
      const bot = require(Runtime.getFunctions()['speakToBot'].path);
      let reply = await bot.speakToBot(event['Body']);

      await twilio
        .conversations
        .conversations(event['ConversationSid'])
        .messages
        .create({ author: 'system', body: reply.message });

      if (reply.route == 'no') {
        callback(null, 'No routing. Bot interacting with participant');
      } else if (reply.route.includes('@')) {
        selectedWorker = reply.route;
        await twilio.conversations
          .conversations(event['ConversationSid'])
          .participants
          .create({ identity: selectedWorker });
      } else if (reply.route == 'AGENT') {
        selectedWorker = await getLongestIdleAvailableWorker(context);

        await twilio.conversations
          .conversations(event['ConversationSid'])
          .participants
          .create({ identity: selectedWorker })
      }


      const crm = require(Runtime.getFunctions()['crm'].path);
      let participant = await crm.fetchByPhoneNumber(event['Author'], context);

      if (participant.display_name) {
        await twilio
          .conversations
          .conversations(event['ConversationSid'])
          .update({
            friendlyName: `${participant.display_name}`
          });
      }

      callback(null, event['ConversationSid']);
    }
  } else {
    callback(null, 'All good. Let the conversation flow');
  }
}
let getLongestIdleAvailableWorker = async (context) => {
  const availableWorkers = await context.getTwilioClient().taskrouter.workspaces(context.FRONTLINE_WORKSPACE)
    .workers
    .list({ taskQueueSid: context.DEFAULT_POOL_QUEUE_SID, available: true });

  //sort list by lastAcceptedTaskTime
  availableWorkers.sort((a, b) => (
    JSON.parse(a.attributes).lastAcceptedTaskTime
    > JSON.parse(b.attributes).lastAcceptedTaskTime)
    ? 1 : -1);
  const longestIdle = availableWorkers[0];
  console.log(`longestIdleAvailableWorker ${longestIdle.friendlyName}`);

  //update lastAcceptedTaskTime for selected worker
  let attr = JSON.parse(longestIdle.attributes);
  attr.lastAcceptedTaskTime = new Date().getTime();
  const updatedWorker = await context.getTwilioClient().taskrouter.workspaces(context.FRONTLINE_WORKSPACE)
    .workers(longestIdle.sid)
    .update({ attributes: JSON.stringify(attr) });
  console.log(`${updatedWorker.friendlyName} updated attributes: ${updatedWorker.attributes}`)
  return updatedWorker.friendlyName;
}
