// referance link
var foo = { bas: 123 };
var bar = foo;
bar.bas = 456;
console.log(foo.bas); // 456

// copy to break the link
var herp = { bas: 123 };
var derp = { bas: herp.bas }; // copy
derp.bas = 456;               // change copy
console.log(herp.bas);        // 123, original unchanged
