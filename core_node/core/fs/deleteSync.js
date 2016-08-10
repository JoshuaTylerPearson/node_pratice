var fs = require('fs');

try {
  fs.unlinkSync('./test.txt');
  console.log('test.txt deleted')
} catch (err) {
  console.log('error:', err);
}
