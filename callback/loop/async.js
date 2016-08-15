// an async function to load an item
function loadItem(id, cb) {
  setTimeout(function () {
    cb(null, { id: id });
  }, 500);
}

// when all items are laoded
function itemsLoaded(err, loadedItems) {
  console.log('do something with:', loadedItems);
}

// load in parallel
var async = require('async');
async.parallel([
  function (cb) {
    loadItem(1, cb);
  },
  function (cb) {
    loadItem(2, cb);
  }
], itemsLoaded)
