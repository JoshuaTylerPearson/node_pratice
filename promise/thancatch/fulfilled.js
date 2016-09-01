var Q = require('q');

Q.when(null).then(function (val) {
  console.log(val == null); // true
});

Q.when('kung fu').then(function (val) {
  console.log(val); // kung fu
});

console.log('I will always print first becuse *then* is always in async');
