var Q = require('q');
var Bluebird = require('bluebird');

new Bluebird(function (resolve) { // a bluebird promise
  resolve('foo');
})
  .then(function (val) {
    console.log(val); // foo
    return Q.when('bar'); // a q promise
  })
  .then(function (val) {
    console.log(val); // bar
  });
