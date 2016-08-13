var express = require('express');
var cookieSession = require('cookie-session');

var app = express()
  .use(cookieSession({
    keys: ['secret sign key DO NO STEAL']
  }))
  .use('/home', function (req, res) {
    if (req.session.views) {
      req.session.views++;
    }
    else {
      req.session.views = 1;
    }
    res.end('total views: '  + req.session.views);
  })
  .use('/reset',function (req,res) {
    delete req.session.views;
    res.end('cleared views');
  })
  .listen(3000);

// clear session: req.session=null;
