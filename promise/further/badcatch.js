var Q = require('q');

function iAsync() {
  return Q.when(null).then(function () {
    var foo; foo.bar; // programming error will get caught
  });
}

iAsync()
  .catch(function (err) {
    var foo; foo.bar; // uncaught exception, regects next promise
  });
  // but is last promise
