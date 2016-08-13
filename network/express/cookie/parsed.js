var express = require('express');
var cookieParser = require('cookie-parser');

var app = express()
  .use(cookieParser())
  .use(function (req, res) {
    if (req.cookies.name) {
      console.log('username:', req.cookies.name);
    }
    else {
      res.cookie('name', 'foo');
    }
    res.end('hello');
  })
  .listen(3000)
