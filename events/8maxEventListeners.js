var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

var listenersCalled = 0;

function someCallBack() {
  // add a Listener
  emitter.on('foo', function () { listenersCalled++ })

  // return from callback
}

for (var i = 0; i < 20; i++) {
  someCallBack();
}

emitter.emit('foo');
console.log('listeners called:', listenersCalled); // 20
