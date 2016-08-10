var foo = {};
foo.__proto__.bar = 123;
console.log(foo.bar); // 123



function herp() { };
herp.prototype.bar = 123;

// herp.prototype will be copied to bas.__proto__
var bag = new herp();

// varify the prototype has been copied
console.log(bag.__proto__ === herp.prototype); // true
console.log(bag.bar)



// creat test function and set a member on its prototype
function bla() { };
bla.prototype.bar = 123;

// creat two instances
var bas = new bla();
var qux = new bla();

// show original value
console.log(bas.bar); // 123
console.log(qux.bar); // 123

// modify prototype
bla.prototype.bar = 456;

// all instances changed
console.log(bas.bar); // 456
console.log(qux.bar); // 456




// create test function and set a member on its prototype
function lerp() { };
lerp.prototype.bar = 123;

// creat two instances
var las = new lerp();
var lux = new lerp();

// overwirte protype value for las
las.bar = 456;
console.log(las.bar); // 456 i.e. prototype not accessed

// other object remain unaffected
console.log(lux.bar); // 123
