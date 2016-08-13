function echo(req, res, next) {
  req.pipe(res);
}

var connect = require('connect');

connect()
  .use('./echo', echo)
  .use(function (req, res) { res.end('wassup'); })
  .listen(3000);
