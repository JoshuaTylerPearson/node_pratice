var express = require('express');
var serveStatic = require('serve-static');

var app = express()
  .use(serveStatic(__dirname + '/public'))
  .listen(3000);

/*
// set default files:
app.use(serveStatic(__dirname + '/public', { 'index': ['default.html',
'default.htm']}))
*/
