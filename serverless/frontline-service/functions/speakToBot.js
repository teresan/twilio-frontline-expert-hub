exports.speakToBot = async (message, participant, context) => {

  //sample bot interaction. implement your bot logic here
  if (message.includes('@')) {
    let email = await getEmailFromMessage(message);
    return {message: `Bear with us while we connect you to ${email}`, route: email} ;
  } else if (message.toLowerCase().includes('agent')) {
    return {message: `Bear with us while we connect you to someone`, route: 'agent'}; 
  } else {
    const crm = require(Runtime.getFunctions()['crm'].path);
    const participantFromDb = await crm.fetch(participant, context);      
    return {message: ` ${participantFromDb.display_name},\nIf you know the email of the person you want to speak, please write:\nEMAIL person@email.com\nOtherwise write:\nAGENT\nand we will connect you with an expert.`, route: 'no'} ;
  }
}
async function getEmailFromMessage(message){
  let parts = message.split(' ');
  const found = parts.find(element => element.includes('@'));
  return found;
}