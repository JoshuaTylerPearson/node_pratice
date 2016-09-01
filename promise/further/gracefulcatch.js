var Q = require('q');

function iAsync() {
  return Q.when(null).then(function () {
    var foo;
    // simulate an uncaught exception becuse of a programming error
    foo.bar; // access a member on an undefined class
  });
}

iAsync()
  .then(function () {  }) // not called
  .catch(function (err) { console.log(err.message); });
