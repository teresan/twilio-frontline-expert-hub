exports.handler = function (context, event, callback) {
    const crm = require(Runtime.getFunctions()['crm'].path);
    const participant = crm.fetch(event['MessagingBinding.Address']);
    callback(null, { friendly_name: participant.display_name });
}