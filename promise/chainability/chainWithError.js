var Q = require('q');

var Q = require('q');

Q.when(null)
  .then(function () {
    throw new Error('panda'); // uncaught exception
  })
  .then(function (val) {
    console.log('!!!', val); // will never get called
  })
  .catch(function (reason) {
    console.log('something threw a', reason.message);
    return 'all good';
  })
  .then(function (val) {
    console.log(val); // all good
    return Q.reject(new Error('taco'));
  })
  .then(function (val) {
    console.log('!!!', val); // will never get called
  })
  .catch(function (reason) {
    console.log('something threw a', reason.message);
  });
