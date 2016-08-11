var fs = require('fs');

// create readable stream
var readableStream = fs.createReadStream('./test.txt');

// pipe to stout
readableStream.pipe(process.stdout);
