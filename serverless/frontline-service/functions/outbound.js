const getCustomerProxyAddress = (channelName, channelAddress, context) => {
        if (channelName === 'whatsapp') {
            return 'whatsapp:+555555';
        } else if (channelName === 'sms') { 
            if(channelAddress.includes('+33'))
                return context.FRONTLINE_PROXY_NUMBER_FR;
            else if(channelAddress.includes('+44'))
                return context.FRONTLINE_PROXY_NUMBER_UK;
        }

        //hardcoded
          //hardcoded --> it should go into the database configuration
    };

    const handleGetProxyAddress = (event, context) => {
        console.log('Getting Proxy Address');
        // console.log(event.Token); //token parameter no longer available on callbacks V2
        console.log(event.Worker);
        console.log(event.CustomerId);
        console.log(event.ChannelType);
        console.log(event.ChannelValue);

    
         const workerIdentity = event.Worker.identity;
         const customerId = event.CustomerId;
         const channelName = event.ChannelType;
         const channelAddress = event.ChannelValue;
    
         const proxyAddress = getCustomerProxyAddress(channelName, channelAddress, context);
    
         // In order to start a new conversation ConversationsApp need a proxy address
         // otherwise the app doesn't know from which number send a message to a customer
         if (proxyAddress) {
                return proxyAddress
             
            
         }else{
            console.log("Proxy address not found");

             return null;
         }
    
 };
    

exports.handler = function(context, event, callback) {
    const location = event.Location;

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
