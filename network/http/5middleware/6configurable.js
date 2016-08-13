// configurable middleware creater
function greeter(message) {
  return function (req, res, next) {
    res.end(message);
  };
}

var helloWorldGreeter = greeter('hello world');
var heyThereGreeter = greeter('hey there');

var connect = require('connect');
connect()
  .use('/hello', helloWorldGreeter)
  .use('/hey', heyThereGreeter)
  .listen(3000);
