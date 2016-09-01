var Q = require('q');

Q.when(null)
  .then(function () {
    return 'kung fu';
  })
  .then(function (val) {
    console.log(val); // kung fu
    return Q.when('panda');
  })
  .then(function (val) {
    console.log(val); // panda
    // nothing returned
  })
  .then(function (val) {
    console.log(val == undefined); // true
  });
