var Q = require('q');

// an async function to load an item
var loadItem = Q.nbind(function (id, cb) {
  setTimeout(function () {
    cb(null, {id: id});
  }, 500);
});

Q.all([loadItem(1), loadItem(2)])
  .then(function (items) {
    console.log('items:', items); // items: [ { id: 1 }, { is: 2 } ]
  })
  .catch(function (reason) { console.log(reason); });
