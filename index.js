const config     = require('./config');
const express    = require('express');
const twilio     = require('twilio')(config.twilio.account_sid, config.twilio.auth_token);
const ngrok      = require('ngrok');
const axios     = require('axios');


console.log(config.twilio.accountSid);
console.log(config.ngrokSubdomain);
const app = new express();
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies


const CUSTOMERS = [ 
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
                objects: { customers: CUSTOMERS }
            }));

        break;
        case "GetCustomerDetailsByCustomerId":
            
            let customerId = request.body.CustomerId;
            console.log(customerId);
            //Response type customer
            ////////////////////////

            // response.send(JSON.stringify({
            //     objects: {
            //         customer: {
            //             display_name: "Ana Andrés",
            //             customer_id: "1",
            //             channels: [{ type: "sms", value:"+33679571533" }]
            //         }
            //      }
            //     }));

            response.send(JSON.stringify({
                  objects: {
                      customer: CUSTOMERS[customerId-1]
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
    let location = request.query.location;
    let token = request.body.token; //empty?
    let worker = request.body.worker; //empty?
    console.log(token);
    
      console.log(location);
});


app.post('/routing', (req, res) => {
  console.log(`routing for ${req.body.ConversationSid}`)
  twilio.conversations
        .conversations(req.body.ConversationSid)
        .participants
        .create({ identity: 'tnascimento+frontline@twilio.com' })
        .then(participant => console.log('Create agent participant: ', participant.sid))
        .catch(e => console.log('Create agent participant: ', e));
});

app.post('/pre-event', (req, res) => {
  console.log(req.body['MessagingBinding.Address']);
  res.send(JSON.stringify({
    friendly_name: `Chat with ${CUSTOMERS.filter(e => e.channels[0].value == req.body['MessagingBinding.Address'])[0].display_name}`
  }));
});

app.post('/post-event', async (req, res) =>  {
  console.log('participant added');
  const customerNumber = req.body['MessagingBinding.Address'];
  const isCustomer = customerNumber && !req.body.Identity;

  if (isCustomer) {
      const customerParticipant = await twilio.conversations
          .conversations(req.body.ConversationSid)
          .participants
          .get(req.body.ParticipantSid)
          .fetch();

      var customerDetails = CUSTOMERS.filter(e => e.channels[0].value == req.body['MessagingBinding.Address'])[0];

      const participantAttributes = JSON.parse(customerParticipant.attributes);
      const customerProperties = {
          attributes: JSON.stringify({
              ...participantAttributes,
              avatar: participantAttributes.avatar || customerDetails.avatar,
              customer_id: participantAttributes.customer_id || customerDetails.customer_id,
              display_name: participantAttributes.display_name || customerDetails.display_name
          })
      };
  
      // If there is difference, update participant
      if (customerParticipant.attributes !== customerProperties.attributes) {
          // Update attributes of customer to include customer_id
          await customerParticipant
              .update(customerProperties)
              .catch(e => console.log("Update customer participant failed: ", e));
      }  }
  
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
  