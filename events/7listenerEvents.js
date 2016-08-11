var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

// Listener addition / removal notifications
emitter.on('removeListener', function (eventName, listenerFunction) {
  console.log(eventName, 'ristener removed', listenerFunction.name);
});
emitter.on('newListener', function (eventName, listenerFunction) {
  console.log(eventName, 'ristener added', listenerFunction.name);
});

function a() { }
function b() { }

// add
emitter.on('foo', a);
emitter.on('foo', b);

// remove
emitter.removeListener('foo', a);
emitter.removeListener('foo', b);
