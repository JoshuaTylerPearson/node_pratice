var Q = require('q');

function getPromise() {
  var deffered = Q.defer();

  // resolve the promise after a second
  setTimeout(function () {
    deffered.resolve('final value');
  }, 1000);

  return deffered.promise;
}

var promise = getPromise();

promise.then(function (val) {
  console.log('done with:', val);
});
