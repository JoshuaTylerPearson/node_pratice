var express = require('express');

var app = express()
  .use(function (req, res) {
    console.log('---client request cookies header:\n',
 req.headers['cookie']);
    res.cookie('name', 'foo');
    res.end('hello')
  })
  .listen(3000)
