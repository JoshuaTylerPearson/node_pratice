// async function to load an item
function loadItem(id, cb) {
  setTimeout(function () {
    cb(null, { id: id });
  }, 500);
}

// function to manage loading
var loadedItems = [];
function itemsLoaded() {
  console.log('do somethig with:', loadedItems);
}
function itemsLoaded(err, item) {
  loadedItems.push(item);
  if (loadedItems.length == 2) {
    itemsLoaded();
  }
}

// calls to load
loadItem(1, itemsLoaded);
loadItem(2, itemsLoaded);
