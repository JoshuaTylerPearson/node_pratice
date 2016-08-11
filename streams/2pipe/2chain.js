var fs = require('fs');
var gzip = require('zlib').createGzip();

var inp = fs.createReadStream('test.txt');
var out = fs.createWriteStream('test.txt.gz');

// pipe chain
inp.pipe(gzip).pipe(out);
