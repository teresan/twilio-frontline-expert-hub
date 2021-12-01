
exports.handler = async function (context, event, callback) {
  console.log(`${event['EventType']}`);

  const twilio = context.getTwilioClient();
  const crm = require(Runtime.getFunctions()['crm'].path);

  //updates participant's avatar on conversation add. update here to consider other channels
  if (event['MessagingBinding.Address']) {
    crm.fetch(event['MessagingBinding.Address'], context)
      .then(participant => {
        callback(null, {
          friendly_name: participant.display_name,
          attributes: JSON.stringify({ avatar: participant.avatar })
        });
      }).catch(e => callback(e));
  }

  //analyses participant's (end user) message and redirect to bot
  if (event['EventType'] === 'onMessageAdd' && event['Source'] != 'SDK') {
    let message = event['Body'];

    let participants = await twilio
      .conversations
      .conversations(event['ConversationSid'])
      .participants
      .list();

    if (participants.length > 1) {
      callback(null, 'All participants added');

    } else {
      const bot = require(Runtime.getFunctions()['speakToBot'].path);
      let reply = await bot.speakToBot(message, event['Author'], context);

      //sends bot's reply message
      await twilio
        .conversations
        .conversations(event['ConversationSid'])
        .messages
        .create({ author: 'system', body: reply.message });

      //no route means bot still interacting with participant
      if (reply.route == 'no') {
        callback(null, 'No routing. Bot interacting with participant');
      } else {

        //add worker participant, after end user selection
        let selectedWorker = '';

        if (reply.route == 'agent') {
          selectedWorker = await getLastFrontLineUser(twilio, event['Author'], event['ConversationSid']);
          if (!selectedWorker) {
            selectedWorker = await getLongestIdleAvailableWorker(context);
          }
        } else {
          selectedWorker = reply.route;
        }
        console.log(`selectedWorker ${selectedWorker}`);

        let name = event['Author'];
        const participant = await crm.fetch(event['Author'], context);

        if (participant.display_name) {
          name = participant.display_name
        }

        //adds worker to the conversation
        await twilio.conversations
          .conversations(event['ConversationSid'])
          .participants
          .create({ identity: selectedWorker })

        //updates conversation friendly name
        await twilio
          .conversations
          .conversations(event['ConversationSid'])
          .update({
            friendlyName: `${name}`
          });

        callback(null, event['ConversationSid']);
      }
    }
  } else {
    callback(null, 'All good. Let the conversation flow');
  }
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
  return updatedWorker;
}
