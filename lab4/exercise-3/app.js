var events = require('events');
var eventEmitter = new events.EventEmitter();

var alarm = function () {
    console.log('Alarm has been triggered!');
}

var callForHelp = function () {
    console.log('Call 911!');
}

eventEmitter
    .on('call1', alarm)
    .on('call2', callForHelp);

eventEmitter.emit('call');
eventEmitter.emit('call2');   