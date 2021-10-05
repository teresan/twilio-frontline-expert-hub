

exports.handler = async function (context, event, callback) {

}

exports.speakToBot = async (message, participant) => {

  console.log("SpeakToBot");
  console.log(message);
  let option = "";
  
  if(message.includes("EMAIL"))
  {
      option = "email"
  }
  else if(message.includes("AGENT"))
  {
      option = "agent"
  }

    switch(option) {
          case 'email': 

          //TODO error handling participant not found
          //--> BOT can ask THE participants name before
          let email = getEmailFromMessage(message);

          return {message: `Bear with us while we connect you to ${email}`, route: email } 
       

          case 'agent': 
            
            return {message: `Bear with us while we connect you to someone`, route: 'agent' } 
        
          default: 
          const crm = require(Runtime.getFunctions()['crm'].path);
            
          const participant2 = await crm.fetch(participant, context.DB_URL);  // --> OPTION WHEN WHE DO NOT HAVE IT IN THE DB!!
          
          let name = "UNKNOWN"

          if(participant2.display_name) {
              name = participant2.display_name
          }
          return {message: ` ${name}, if you know the email of the person you want to speak to write: EMAIL person@email.com ; otherwise write AGENT and we will connect you with an expert.`, route: 'no' } 
        
      }
   
}

