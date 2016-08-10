var fs = require('fs');

fs.unlink('./test.txt', function(err) {
  if (err) {
    console.log('error:', err);
  }
  else {
    console.log('test.txt deleted');
  }
});
