

exports.handler = async function (context, event, callback) {

}

exports.speakToBot = async (message, participant){


  console.log("SpeakToBot");
  
    switch(message) {
          case 'Hello': 
            
            return {message: `Hello ${participant}`, route: 'no' }
          case 'Speak agent': 
            
            return {message: `Let us pass you to an agent`, route: 'yes' } 
          default: 
          console.log("default");

          return {message: `I have no clue what you said. Write "Speak to an agent" to speak to a person`, route: 'no' } 
          break;
      }
   
}

