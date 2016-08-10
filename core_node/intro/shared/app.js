var foo = require('./foo');
console.log('initial something:', foo.something); // 123

// modify something:
foo.something = 456;

// load bar:

var bas = require('./bar');
