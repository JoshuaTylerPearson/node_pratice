var fs = require('fs');

function loadJSONS(filename, cb) {
  fs.readFile(filename, function (err, data) {
    if (err) cb(err);
    else cb(null, JSON.parse(data));
  });
}
