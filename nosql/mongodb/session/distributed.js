var express = require('express');
var expressSession = require('express-session');

var MongoStore = require('connect-mongo')(expressSession)
var sessionStore = new MongoStore({ url: 'mongodb://localhost:27017/demo' });

var app = express()
  .use(expressSession({
    secret: 'secret sign key DO NO STEAL',
    store: sessionStore
  }))
  .use('/home', function (req, res) {
    if (req.session.views) {
      req.session.views++;
    }
    else {
      req.session.views = 1;
    }
    res.end('total views: ' + req.session.views);
  })
  .use('/reset', function (req, res) {
    delete req.session.views;
    res.end('cleared all views');
  })
  .listen(3000);
