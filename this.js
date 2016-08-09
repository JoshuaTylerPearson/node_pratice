var foog = {
  bar: 123,
  bas: function () {
    console.log('inside this.bar is:', this.bar);
  }
}

console.log('foog.bar is:', foog.bar); // foo.bar is: 123
foog.bas();                            // inside this.bas is: 123



function herp () {
  console.log('is this called from globals? : ', this === global); // true
}
herp();



var derp = {
  dar: 123
};

function merp() {
  if (this === global)
    console.log('called form global');
  if (this === derp)
    console.log('called from derp')
}

// global context
merp();        // called from global

//from derp
derp.merp = merp;
derp.merp();  // called from derp



function foo() {
  this.foo = 123;
  console.log('Is this global?: ', this == global);
}

// w/o new operator
foo();                    // Is this global?: true
console.log(global.foo);  // 123

// w/ new operator
var newFoo = new foo();  // Is this global?: false
console.log(newFoo.foo); // 123
