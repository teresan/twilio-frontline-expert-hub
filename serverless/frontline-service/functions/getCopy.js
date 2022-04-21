getLanguage =  async (context) => {
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
    let result = "en";
    try {
      result = response.data.data[0]["attributes"].language; //only one
      console.log(response.data.data[0]["attributes"].language);

    }
    catch{
      return result; //english if it fails
    }

   
  } catch (err) {
    console.log('"getLanguage: "+ getLanguage failed', err);
    return 'en';
  }
}

exports.getCopy =  async (entryId, context) => {

  const language = await getLanguage(context);
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