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

exports.handler = function (context, event, callback) {
  switch(event.location) {
    case 'GetCustomerDetailsByCustomerId': 
      callback(null, 
        {objects: {
          customer: customers[event.CustomerId - 1]
        }});
    default: 
      callback(null, {objects: {customers: customers}});
  }
}

exports.fetch = (phoneNumber) => {
    console.log(phoneNumber);
    return customers.filter(e => e.channels[0].value == phoneNumber)[0];
}