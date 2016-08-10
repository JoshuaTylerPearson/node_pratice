var foo = {};
var bar = {};

// a function that uses `this`
function func(val) {
  this.val = val;
}

// force this in function to be foo
func.call(foo, 123);

// force this in function to be bar
func.call(bar, 456);

// varify:
console.log(foo.val); // 123
console.log(bar.val); // 456
