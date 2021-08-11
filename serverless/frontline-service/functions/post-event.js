exports.handler = async function (context, event, callback) {

    const twilio = context.getTwilioClient();
    const response = new Twilio.Response();
    response.setStatusCode(200);

    const customerNumber = event['MessagingBinding.Address'];
    console.log(`post-event ${event.EventType} ${event.Identity?event.Identity:customerNumber}`);
    let emptyAttributes = !event.Attributes || ('{}' == event.Attributes);

    if (event.Identity) {
        response.setBody('No need to query customer attributes: frontline user added');
        callback(null, response);
    }

    if (!emptyAttributes) { //in outbound conversations, customer attributes are already loaded
        response.setBody('No need to query customer attributes: outbound conversation');
        callback(null, response);
    }

    //find customer in crm 
    const crm = require(Runtime.getFunctions()['crm'].path);
    const crmCustomer = await crm.fetch(customerNumber, context.DB_URL)
        .catch(error => callback(error));;

    //fetch participant
    const participant = await twilio.conversations
        .conversations(event.ConversationSid)
        .participants
        .get(event.ParticipantSid)
        .fetch()
        .catch(error => callback(error));

    //save crm data to participant attributes
    const participantAttributes = JSON.parse(participant.attributes);
    const customerProperties = {
        attributes: JSON.stringify({
            ...participantAttributes,
            avatar: participantAttributes.avatar || crmCustomer.avatar,
            customer_id: participantAttributes.customer_id || crmCustomer.customer_id,
            display_name: participantAttributes.display_name || crmCustomer.display_name
        })
    };

    //update participant
    if (participant.attributes !== customerProperties.attributes) {
        await participant
            .update(customerProperties)
            .catch(error => callback(error));
    }
    
    callback(null, response);
}