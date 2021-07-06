try {
    require('dotenv').config(); //change from .load
  } catch (e) { console.log(e)}
  
  module.exports = {
    twilio: {
      accountSid: process.env.TWILIO_ACCOUNT_SID,
      authToken: process.env.TWILIO_AUTH_TOKEN,
      apiKey: process.env.TWILIO_API_KEY,
      apiSecret: process.env.TWILIO_API_SECRET,
      chatServiceSid: process.env.TWILIO_CHAT_SERVICE_SID,
      messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID
    },
    port: process.env.PORT || 3001, //,
    ngrokSubdomain: 'FL-backend'
  }
  