var express = require('express');

var app = express()
  .use(function (req, res) {
    res.cookie('name', 'foo');
    res.end('hello')
  })
  .listen(3000)
