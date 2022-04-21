exports.speakToBot = async (message, context) => {

  let language = await getLanguage(context);
  let outcome = await getCopy('connection', language, context);

  console.log("speakToBot");
  console.log(outcome);
  //sample bot interaction. implement your bot logic here
  if (message.includes('@')) {
    let email = await getEmailFromMessage(message);
    return {message: `Bear with us while we connect you to ${email}`, route: email} ;
  } else if (message.toLowerCase().includes('agent')) {
    return {message: `Bear with us while we connect you to someone`, route: 'agent'}; 
  } else {
    return {message: `If you know the email of the agent you want to speak, please write:\nperson@email.com\nOtherwise write:\nAGENT\nand we will connect you with an expert.`, route: 'no'} ;
  }
}

async function getEmailFromMessage(message){
  let parts = message.split(' ');
  const found = parts.find(element => element.includes('@'));
  return found;
}