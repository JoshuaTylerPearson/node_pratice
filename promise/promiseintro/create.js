var Q = require('q');

var deffered = Q.defer();
var promise = deffered.promise;

promise.then(function (val) {
  console.log('done with:', val);
});

deffered.resolve('final value');  // done with: final value
