var express = require('express');
var bodyParser = require('body-parser');

// in memory collection of items
var items = [];

// create a router
var router = express.Router();
router.use(bodyParser());

// setup the collection routes
router.route('/')
  .get(function (req, res, next) {
    res.send({
      status: 'items found',
      items: items
    });
  })
  .post(function (req, res, next) {
    items.push(req.body);
    res.send({
      status: 'item added',
      itemId: items.length - 1
    });
  })
  .put(function (req, res, next) {
    items = req.body;
    res.send({ status: 'items replaced' });
  })
  .delete(function (req, res, next) {
    items = [];
    res.send({ status: 'items cleared' });
  });

// setup item routes
router.route('/:id')
  .get(function (req, res, next) {
    var id = req.params['id'];
    if (id && items[Number(id)]) {
      res.send({
        status: 'item found',
        item: items[Number(id)]
      });
    }
    else {
      res.send(400, { status: 'not found' });
    }
  })
  .all(function (req, res, next) {
    res.send(501, { status: 'not implemented' });
  });

// use the router
var app = express()
  .use('/todo', router)
  .listen(3000);
