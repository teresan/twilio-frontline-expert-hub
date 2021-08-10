exports.handler = async function (context, event, callback) {
    console.log("postEvent "+ JSON.stringify(event));
    const customerNumber = event['MessagingBinding.Address'];

    //find customer in crm 
    const crm = require(Runtime.getFunctions()['crm'].path);
    const crmCustomer = crm.fetch(customerNumber,context.DB_URL);
    const twilio = context.getTwilioClient();

    //fetch participant
    const participant = await twilio.conversations
        .conversations(event.ConversationSid)
        .participants
        .get(event.ParticipantSid)
        .fetch();

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
        // Update attributes of customer to include customer_id
        await participant
            .update(customerProperties)
            .catch(e => console.log("Update customer participant failed: ", e));
    }
    callback(null);
}