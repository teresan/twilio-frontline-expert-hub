
exports.handler = function (context, event, callback) {
    console.log("PreEvent " + JSON.stringify(event));

    const crm = require(Runtime.getFunctions()['crm'].path);
    console.log(event['MessagingBinding.Address']);

    if (event['MessagingBinding.Address']) {
        crm.fetch(event['MessagingBinding.Address'], context.DB_URL).then(participant => {
            console.log(`participant ${participant}`);
            callback(null, {
                friendly_name: participant.display_name,
                attributes: JSON.stringify({ avatar: participant.avatar })
            });

        }).catch(e => {
            console.log(e);
            callback("this is an error " + e);

        });

    }
    else
        callback(null);
}