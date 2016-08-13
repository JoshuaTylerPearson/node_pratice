var express = require('express');

var app = express();
app.param('userId', function (req, res, next, userId) {
  res.write('searching for user: ' + userId + '\n');
  // simulate user lookup and load request object for middleware
  req.user = { userId: userId };
  next();
});
app.get('/user/:userId', function (req, res) {
  res.end('user is: '+ JSON.stringify(req.user));
});
app.listen(3000);
