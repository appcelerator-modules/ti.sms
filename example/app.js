var window = Ti.UI.createWindow({
    backgroundColor: 'white'
});
window.open();

Titanium.SMS = Ti.SMS = require('ti.sms');

var sms = Ti.SMS.createSMSDialog({
    animated: true
});
sms.barColor = 'black';
sms.toRecipients = [
    '5678309' // who should receive the text? put their numbers here!
];
sms.messageBody = 'This is a text message.';
sms.addEventListener('complete', function(evt) {
    if (evt.success) {
        alert('SMS sent!');
    }
    else {
        switch (evt.result) {
            case Ti.SMS.CANCELLED:
                alert('User cancelled SMS!');
                break;
            case Ti.SMS.FAILED:
            default:
                alert(evt.error);
                break;
        }
    }
});
sms.open();