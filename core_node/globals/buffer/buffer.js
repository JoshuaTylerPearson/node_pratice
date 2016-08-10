// a string
var str = "hello buffer";

// string -> buffer
var buffer = new Buffer(str, 'utf-8');
console.log(buffer); // binary

// buffer -> string
var roundTrip = buffer.toString('utf-8');
console.log(roundTrip); // hello buffer
