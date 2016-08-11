// util function
var inherits = require('util').inherits;

// base
function Base() { this. message = "message"; };
Base.prototype.foo = function () { return this.message + " base foo" };

// Child
function Child() { Base.call(this); };
inherits(Child, Base);

// override parent behaviour in Child
Child.prototype.foo = function () {
  // Call base implementation + customize
  return Base.prototype.foo.call(this) + " child foo";
}

// Test:

var child = new Child();
console.log(child.foo()); // message base foo child foo
