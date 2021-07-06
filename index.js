const config     = require('./config');
const express    = require('express');
const twilio     = require('twilio');
const ngrok      = require('ngrok');
const axios     = require('axios');


console.log(config.twilio.accountSid);
console.log(config.ngrokSubdomain);
const app = new express();
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies


app.post('/crm', (request, response) => {
    
    console.log(request);
    let location = request.query.location;
    let token = request.body.Token; //empty?
    let worker = request.body.Worker; //empty?
   
    console.log(token);
    // CHECK TOKEN HEATHER TO PROTECT APPLICATION
    /////////////////////////////////////////////
 /*   let twilioHeader =  request.header("X-Twilio-Signature");
    axios.post("https://iam.twilio.com/v2/Tokens/validate/" + twilioHeader,
        {
        token: token,
        },
        {
        headers: {
        "Content-Type": "application/json",
        },
        auth: {
        username: config.twilio.accountSid,
        password: config.twilio.authToken,
        },
        }
       ).then((response2) => {
        console.log(response2);

        console.log(location);
        response.set('Content-Type', 'application/json');
        response.send(JSON.stringify({
        objects: {
            customers: [ {
                display_name: "Ana1",
                customer_id: "1"
            },
            {
                display_name: "Ana2",
                customer_id: "2"
            }
            ]
         }
        }));
      }, (error) => {
        console.log(error);
      });
    */
      console.log(location);
      console.log(worker);
      response.set('Content-Type', 'application/json');

      switch(location) {
        case "GetCustomersList":
            //return JSON object with the list of Customers on file
            response.send(JSON.stringify({
                objects: {
                    customers: [ {
                        display_name: "Ana1",
                        customer_id: "1"
                    },
                    {
                        display_name: "Ana2",
                        customer_id: "2"
                    }
                    ]
                 }
                }));

        break;
        case "GetCustomerDetailsByCustomerId":
            
            let customerId = request.body.CustomerId;
            console.log(customerId);
            //Response type customer
            ////////////////////////

            response.send(JSON.stringify({
                objects: {
                    customer: {
                        display_name: "Ana1",
                        customer_id: "1",
                        channels: [{ type: "sms", value:"+33679571533" }]
                    }
                 }
                }));

        break;

      }
 
})



app.post('/conversations', (request, response) => {
    console.log(request);

});

app.post('/templates', (request, response) => {
    console.log(request);
    console.log(request);
    let location = request.query.location;
    let token = request.body.token; //empty?
    let worker = request.body.worker; //empty?
    console.log(token);
    
      console.log(location);
});

app.listen(config.port, () => {
  console.log(`Application started at localhost:${config.port}`);
});


var ngrokOptions = {
    proto: 'http',
    addr: config.port,
    //host_header: "rewrite "+ config.port
  };
  
  if (config.ngrokSubdomain) {
    ngrokOptions.subdomain = config.ngrokSubdomain
  }
  
  ngrok.connect(ngrokOptions).then(url => {
    console.log('ngrok url is ' + url);
  }).catch(console.error);
  