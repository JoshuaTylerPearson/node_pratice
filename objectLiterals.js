// object
var foo = {};
console.log(foo);  // {}

// runtime extend
foo.bar = 123;     // extend foo
console.log(foo);  // { bar: 123 }

// objct literal notation
var herp = {
  derp: 123
};
console.log(herp); // { derp: 123 }

// nested literals
var merp = {
  gerp: 123,
  lerp: {
    lerp1: 'some string',
    lerp2: 245
  }
};
console.log(merp);


//array literal
var meep = {
  geep: 123,
  leep: [1, 2, 3]
};
console.log(meep);

//literals array
var meg = {
  geg: 123,
  leg: [{
    qux: 1
  },
  {
    qux: 2
  },
  {
    qux: 3
  }]
};
console.log(meg.geg);         //123
console.log(meg.leg[0].qux);  //1
console.log(meg.leg[1].qux);  //2
