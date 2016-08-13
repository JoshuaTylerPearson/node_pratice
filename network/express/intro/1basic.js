var express = require('express'),
  http = require('http');

// create an express application
var app = express()
  // regester a middleware
  .use(function (req, res, next) {
    res.end('hello express');
  });

// regester with http
http.createServer(app)
  .listen(3000);
