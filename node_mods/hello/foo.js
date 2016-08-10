var bar = require('bar');

bar();  // hello node_modules


/*
// ./node_modules/bar.js:

module.export = function () {
  console.log('hello node_modules');
}
*/
