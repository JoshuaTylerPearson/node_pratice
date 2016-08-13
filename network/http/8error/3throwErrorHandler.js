var connect = require('connect');

connect()
  .use(function () { throw new Error('<error details>'); })
  .use(function (req, res, next) { res.end('this is never called'); })
  .use(function (err, req, res, next) {
    // log the error on the server
    console.log('Error handled:', err.message);
    // infrom the client
    res.writeHead(500);
    res.end('unable to process request');
  })
  .listen(3000);
