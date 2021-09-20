const getCustomerProxyAddress = (channelName, channelAddress, context) => {
        if (channelName === 'whatsapp') {
            return 'whatsapp:+555555';
        } else if (channelName === 'sms') { 
            if(channelAddress.includes('+33'))
                return context.FR_NUMBER;
            else if(channelAddress.includes('+44'))
                return context.UK_NUMBER;
        }

        //hardcoded
          //hardcoded --> it should go into the database configuration
    };

    const handleGetProxyAddress = (event, context) => {
        console.log('Getting Proxy Address');
        console.log(event.Token);
        console.log(event.Worker);
        console.log(event.CustomerId);
        console.log(event.Channel.type);
        console.log(event.Channel.value);

    
         const workerIdentity = event.Worker.identity;
         const customerId = event.CustomerId;
         const channelName = event.Channel.type;
         const channelAddress = event.Channel.value;
    
         const proxyAddress = getCustomerProxyAddress(channelName, channelAddress, context);
    
         // In order to start a new conversation ConversationsApp need a proxy address
         // otherwise the app doesn't know from which number send a message to a customer
         if (proxyAddress) {
                return proxyAddress
             
            
         }else{
             return null;
         }
    
         console.log("Proxy address not found");
         callback("No proxy address available")
 };
    

exports.handler = function(context, event, callback) {
    console.log('OUTBOUND' + JSON.stringify(event));

    const location = event.location;
    console.log(location);

     // Location helps to determine which action to perform.
    switch (location) {
             case 'GetProxyAddress': {
                 let proxyAddress = handleGetProxyAddress(event, context); //callsback if needed
                 if(proxyAddress)
                    callback(null, {proxy_address: proxyAddress})
                 else
                    callback("No proxy address available");

                 return;
             }
    
             default: {
                 console.log('Unknown location: ', location);
                 callback(null);    
                 return;
             }
    }


}

// const config = require('../../config');

// const outgoingConversationCallbackHandler = (req, res) => {
//     console.log('outgoingConversationCallbackHandler');

//     const location = req.query.location;

//     // Location helps to determine which action to perform.
//     switch (location) {
//         case 'GetProxyAddress': {
//             handleGetProxyAddress(req, res);
//             return;
//         }

//         default: {
//             console.log('Unknown location: ', location);
//             res.sendStatus(422);
//         }
//     }
// };

// 

// module.exports = outgoingConversationCallbackHandler;
