console.log(console === global.console);       // true
console.log(setTimeout === global.setTimeout); // true
console.log(process === global.process);       // true

// add something to global
require('./addToGlobal');
console.log(something); // 123

// ^THIS IS USUALLY BAD
