const customers = [ 
    {
      display_name: "Maria Sanchez",
      customer_id: "1",
      channels: [{ type: "sms", value:"+33679571533" }],
      avatar: "https://cinnabar-albatross-5407.twil.io/assets/face2.jpeg"
    },
    {
      display_name: "Jo Anne",
      customer_id: "2", 
      channels: [{ type: "sms", value:"+447491497411" }],
      avatar: "https://cinnabar-albatross-5407.twil.io/assets/face3.jpeg"
    },
    {
      display_name: "Susan Smith",
      customer_id: "3", 
      channels: [{ type: "whatsapp", value:"+5521989518451" }],
      avatar: "https://cinnabar-albatross-5407.twil.io/assets/face4.jpeg"
    },
  ];

const axios = require("axios");

async function retrieveCustomers(DB){
  console.log(DB);
  try{
    const resp = await axios.post(DB+'/auth/local', {
    identifier: 'frontline_app',
    password: '12345678',
  });
  console.log("data");
   console.log(resp.data.jwt);
  
    const response =  await  axios.get(DB+'/customers', {
           headers: {
             Authorization:
               'Bearer '+resp.data.jwt,
           },
       });
   return response.data;
      }
      catch(err){
        console.log('retrieveCustomers failed', err);
      }

  
}



exports.handler = async function (context, event, callback) {

  console.log("CRM");
   let customers = await retrieveCustomers(context.DB_URL);
  
    switch(event.location) {
          case 'GetCustomerDetailsByCustomerId': 
            console.log("GetCustomerDetailsByCustomerId");
            
            
            console.log(customers[event.CustomerId - 1]);
            
            callback(null, 
              {objects: {
                customer: customers[event.CustomerId - 1]
              }});
            
        
          
          break;
          default: 
          console.log("default");

            console.log(customers);
            callback(null, {objects: {customers: customers}});
          
          break;
      }
   
}


exports.fetch = async (phoneNumber, DB) => {
    console.log(phoneNumber);
    const customers = await retrieveCustomers(DB); //problem to pass the URL --> context is not passed???
    console.log(customers);
    return customers.filter(e => e.channels[0].value == phoneNumber)[0];
}
