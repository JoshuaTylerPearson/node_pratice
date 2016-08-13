var connect = require('connect');

connect()
  .use(function (req, res, next) { next(); })
  .use(function (err, req, res, next) {
    res.end('error');
  })
  .use(function (req, res, next) { res.end('no error'); })
  .listen(3000);
