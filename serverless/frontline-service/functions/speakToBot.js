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

exports.getLanguage =  async (context) => {
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
    try {
      let result = response.data.data[0]["attributes"].language; //only one
      console.log(response.data.data[0]["attributes"].language);

    }
    catch{
      let result = "en"; //english if it fails
    }

    return result;
  } catch (err) {
    console.log('"getLanguage: "+ getLanguage failed', err);
    return 'en';
  }
}

exports.getCopy =  async (entryId, language, context) => {

  const axios = require("axios").create({
    baseURL: context.DB_URL
  });
  try {
  
    const response = await axios.get(`/localisations?populate=*&filters[locale_lang][$eq]=${language}`, {
      
      headers: {
        Authorization:
          'Bearer ' + context.DB_API_TOKEN,
      },
      
    });
    console.log("response.data");
    console.log(response.data);

    let result = response.data.data[0]["attributes"].entry_locales; //only one
    for (var i=0; i<result.length; i++)
      if(result[i].entry_id === entryId) 
         return result[i].copy;

  } catch (err) {
    console.log('"getCopy: "+ getCopy failed', err);
    return '';
  }
}