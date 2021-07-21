const axios = require('axios')
exports.handler = async function (context, event, callback) {
  const client = context.getTwilioClient();
  const crm = require(Runtime.getFunctions()['crm'].path);
  const participant = crm.fetch(event.attendeeNumber);

  //TODO error handling participant not found
  //TODO error handling existing conversations binding

  //create conversation
  const conversation = await client.conversations.conversations.create({
    messagingServiceSid: context.FRONTLINE_MESSAGING_SERVICE,
    friendlyName: `Chat from concierge with ${participant.display_name}`
  });
  console.log(conversation.sid);

  //TODO fix participant avatar not showing in app
  //TODO fix participant crm details from conversation with error in app

  //add participant by attendee number
  await client.conversations.conversations(conversation.sid)
    .participants
    .create({
      'messagingBinding.address': participant.channels[0].value,
      'messagingBinding.proxyAddress': context.FRONTLINE_PROXY_NUMBER,
      'attributes': {
          avatar: participant.avatar,
          customer_id: participant.customer_id,
          display_name: participant.display_name
      } 
    });

  //send welcoming message
  await client.conversations.conversations(conversation.sid)
    .messages
    .create({ author: 'system', body: 'Ahoy there! You are now with the onsite team of experts!' });

  //call frontline routing 
  const routing = require(Runtime.getFunctions()['routing'].path);
  newEvent = {ConversationSid: conversation.sid};
  return routing.handler(context, newEvent, callback);
};