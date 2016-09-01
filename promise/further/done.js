iAsync()
  .catch(function (err) {
    var foo; foo.bar; // uncaught exception, regects next promise
  });
  .done(); // since previous promise is rejected throws rejected value as error
