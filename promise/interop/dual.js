var Q = require('q');
var fs = require('fs');
var readFileAsync = Q.nbind(fs.readFile);

function loadJSONAsync(filename, callback) {
  return readFileAsync(filename)
    .then(JSON.parse)
    .nodeify(callback);
}

// use as a promise
loadJSONAsync('good.json').then(function (val) {
  console.log(val);
});

// use with callback
loadJSONAsync('good.json', function (err, val) {
  console.log(val);
});
