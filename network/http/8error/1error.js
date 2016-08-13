var connect = require('connect');

connect()
  .use(function (req, res, next) { next( new Error('an error has occured')) })
  .use(function (req, res, next) { res.end('this is never called'); })
  .listen(3000);
