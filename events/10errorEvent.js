var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

// emit an error event
// there is no listener for this event, process terminates
emitter.emit('error', new Error('something happend'));

console.log('this line never executes');
