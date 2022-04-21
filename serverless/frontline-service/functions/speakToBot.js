exports.speakToBot = async (message, context) => {
  const copy = require(Runtime.getFunctions()['getCopy'].path);

  let connection = await copy.getCopy('connection', context);
  let connect_someone = await copy.getCopy('connect_someone', context);
  let connect_email = await copy.getCopy('connect_email', context);
  
  //sample bot interaction. implement your bot logic here
  if (message.includes('@')) {
    let email = await getEmailFromMessage(message);
    return {message: `${connect_email} ${email}`, route: email} ;
  } else if (message.toLowerCase().includes('agent')) {
    return {message: connect_someone, route: 'agent'}; 
  } else {
    return {message: connection, route: 'no'} ;
  }
}

async function getEmailFromMessage(message){
  let parts = message.split(' ');
  const found = parts.find(element => element.includes('@'));
  return found;
}