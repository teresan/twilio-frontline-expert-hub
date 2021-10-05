//exports.speakToBot = async (message, participant) => {

exports.handler = async function (context, event, callback) {


  console.log("SpeakToBot");
  console.log(event.message);
  let option = "";
  
  if(event.message.includes("EMAIL"))
  {
      option = "email"
  }
  else if(event.message.includes("AGENT"))
  {
      option = "agent"
  }

    switch(option) {
          case 'email': 

          //TODO error handling participant not found
          //--> BOT can ask THE participants name before
          let email = getEmailFromMessage(event.message);

          return callback({message: `Bear with us while we connect you to ${email}`, route: email } );
       

          case 'agent': 
            
            return callback({message: `Bear with us while we connect you to someone`, route: 'agent' }); 
        
          default: 
          
          const crm = require(Runtime.getFunctions()['crm'].path);
            
          const participant2 = await crm.fetch(event.participant, context.DB_URL);  // --> OPTION WHEN WHE DO NOT HAVE IT IN THE DB!!
          
          let name = "UNKNOWN"

          if(participant2.display_name) {
              name = participant2.display_name
          }
          return callback({message: ` ${name}, if you know the email of the person you want to speak to write: EMAIL person@email.com ; otherwise write AGENT and we will connect you with an expert.`, route: 'no' } );
        
      }
   

}
async function getEmailFromMessage(message){

  let parts = message.split(" ");
  const found = parts.find(element => element.includes('@'));
  return found;

}