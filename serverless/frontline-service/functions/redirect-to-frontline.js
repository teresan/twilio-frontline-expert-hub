const axios = require('axios')

const getCustomerProxyAddress = (channelName, channelAddress, context) => {
  if (channelName === 'whatsapp') {
      return 'whatsapp:+555555';
  } else if (channelName === 'sms') { 
      if(channelAddress.includes('+33'))
          return context.FRONTLINE_PROXY_NUMBER_FR;
      else if(channelAddress.includes('+44'))
          return context.FRONTLINE_PROXY_NUMBER_UK;
  }

  //hardcoded
    //hardcoded --> it should go into the database configuration
};

exports.handler = async function (context, event, callback) {
  const client = context.getTwilioClient();
  const crm = require(Runtime.getFunctions()['crm'].path);
  const participant = crm.fetch(event.From);

  //TODO error handling participant not found
  //TODO error handling existing conversations binding

  //create conversation
  const conversation = await client.conversations.conversations.create({
    messagingServiceSid: context.FRONTLINE_MESSAGING_SERVICE,
    friendlyName: `Chat with ${participant.display_name} coming from Messaging`
  });
  console.log(conversation.sid);

  //TODO fix participant avatar not showing in app
  //TODO fix participant crm details from conversation with error in app

  //add participant by attendee number
  await client.conversations.conversations(conversation.sid)
    .participants
    .create({
      'messagingBinding.address': participant.channels[0].value, //SMS --> What about Whatsapp
      'messagingBinding.proxyAddress': getCustomerProxyAddress(participant.channels[0].type,messagingBinding.address,context),
      'attributes': {
          avatar: participant.avatar,
          customer_id: participant.customer_id,
          display_name: participant.display_name
      } 
    });

  

  //call frontline routing 
  const routing = require(Runtime.getFunctions()['routing'].path);
  newEvent = {ConversationSid: conversation.sid};
  return routing.handler(context, newEvent, callback);
};