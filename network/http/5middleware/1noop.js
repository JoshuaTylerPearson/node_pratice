var connect = require('connect');

// create a connect dispatcher and regester with http
var app = connect()
          // regeter a middleware
          .use(function (req, res, next) { next(); })
          .listen(3000);
console.log('server running on port 3000');
