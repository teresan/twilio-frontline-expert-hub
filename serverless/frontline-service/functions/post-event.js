exports.handler = async function (context, event, callback) {
    console.log(`postEvent:`, event);
    const twilio = context.getTwilioClient();
    const response = new Twilio.Response();
    response.setStatusCode(200);

    let emptyAttributes = !event.Attributes || ('{}' == event.Attributes);

    if (event.Identity) {
        response.setBody('No need to query customer attributes: frontline user added');
        callback(null, response);
    }

    if (!emptyAttributes) { //in outbound conversations, customer attributes are already loaded
        response.setBody('No need to query customer attributes: outbound conversation');
        callback(null, response);
    }

    if ('onParticipantAdded' == event.EventType) { //only update participant's data when they're added to the convo
        const customerNumber = event['MessagingBinding.Address'];

        //find customer in crm -- to add attributes to FrontLine application
        const crm = require(Runtime.getFunctions()['crm'].path);
        const crmCustomer = await crm.fetchByPhoneNumber(customerNumber, context)
            .catch(error => callback(error));

        if (!crmCustomer) callback(`No crm record for ${customerNumber}`);

        //fetch participant
        const participant = await twilio.conversations
            .conversations(event.ConversationSid)
            .participants
            .get(event.ParticipantSid)
            .fetch()
            .catch(error => callback(error));

        if (!participant) callback('Participant not in the conversation');

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
    }
    callback(null, response);
}