var Q = require('q');
function sleepAsync(ms) {
  var deffered = Q.defer();
  setTimeout(function () {
    deffered.resolve();
  }, ms);
  return deffered.promise;
}

console.log('sleep');
sleepAsync(1000).then(function () {
  console.log('awake'); // ~= 1000ms
});
