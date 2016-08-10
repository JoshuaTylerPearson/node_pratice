var fs = require('fs');

// write
fs.writeFileSync('test.txt', 'hello fs');

// read
console.log(fs.readFileSync('test.txt').toString());
