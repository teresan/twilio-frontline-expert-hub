exports.speakToBot = async (message, context) => {

  let language = await getLanguage(context);
  let outcome = await getCopy('connection', language, context);

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

async function getLanguage(context){
  const axios = require("axios").create({
    baseURL: context.DB_URL
  });
  try {
  
    const response = await axios.get('/configurations', {
      headers: {
        Authorization:
          'Bearer ' + context.DB_API_TOKEN,
      },
      
    });
    let result = response.data.data[0].language; //only one
    console.log(result);

    return result;
  } catch (err) {
    console.log('"retrieveCustomers: "+ retrieveCustomers failed', err);
    return '';
  }
}

async function getCopy(entryID, language, context){
  const axios = require("axios").create({
    baseURL: context.DB_URL
  });
  try {
  
    const response = await axios.get(`/localisations?filters[entry_id][$eq]=${entryID}&filters[localisation][language][&eq]=${language}`, {
      headers: {
        Authorization:
          'Bearer ' + context.DB_API_TOKEN,
      },
      
    });
    let result = response.data.data[0]; //only one
    console.log(response.data.data[0]);
    return result;
  } catch (err) {
    console.log('"retrieveCustomers: "+ retrieveCustomers failed', err);
    return '';
  }
}