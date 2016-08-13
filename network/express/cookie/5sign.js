var express = require('express');
var cookieParser = require('cookie-parser');

var app = express()
  .use(cookieParser('secret sign key DO NO STEAL'))
  .use('/toggle', function (req, res) {
    if (req.signedCookies.name) {
      res.clearCookie('name');
      res.end('name cookie cleared, was:' + req.signedCookies.name);
    }
    else {
      res.cookie('name', 'foo', { signed: true });
      res.end('name cookie set');
    }
  })
  .listen(3000);

/*
// addtional settings:
res.cookie(name, value, {httpOnly:true}) // no javaScript access no XSS
res.cookie(name, value, {secure:true}) // https only

res.cookie(name, value, {maxAge: nnnnnn}) // set cookie expiry time
*/
