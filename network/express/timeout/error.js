var express = require('express');
var timeout = require('connect-timeout');

var app = express()
  .use('/api', timeout(5000)
              , function (req, req, next) {
                // simulate a hagning request by doing nothing
              }
              , function (error, req, res, next) {
                if (req.timeout) {
                  res.statusCode = 500;
                  res.end('request timed out');
                }
                else {
                  next(error);
                }
              })
  .listen(3000)
