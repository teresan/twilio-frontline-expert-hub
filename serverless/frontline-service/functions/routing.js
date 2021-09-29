
exports.handler = async function (context, event, callback) {
  if(event.ByPass){
    return callback(null); //we do not do anything - all sorted in prior call - just to keep consistency with programming

  }
  console.log('routing');
  const twilio = context.getTwilioClient();
  let user = event['MessagingBinding.Address'];

  let selectedWorker = await getLastFrontLineUser(twilio, user, event.ConversationSid);

  if (!selectedWorker) {
    selectedWorker = getFirstAvailableWorker();
  }

  await twilio.conversations
    .conversations(event.ConversationSid)
    .participants
    .create({ identity: selectedWorker })
    .then(participant => console.log('Create agent participant: ', participant.sid))
    .catch(e => console.log('Create agent participant: ', e));

  return callback(null, event.ConversationSid);
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
  return 'tnascimento+frontline@twilio.com';
  // return Math.random() == 0 ? 'tnascimento+frontline@twilio.com' : 'aandresdelvalle+frontline@twilio.com';
}