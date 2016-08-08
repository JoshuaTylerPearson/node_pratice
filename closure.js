function outerFunction(arg) {
  var varibleInOuterFunction = arg;
  function bar() {
    console.log(varibleInOuterFunction); //var in outer scope
  }

  // local function has access to arg
  bar();
}
outerFunction('hello closure!'); // logs arg

// inner functions can access vars from outer scope even after outer function has retruned
function outerFunction2(arg) {
  var varibleInOuterFunction2 = arg;
  return function () {
    console.log(varibleInOuterFunction2);
  }
}
var innerFunction = outerFunction2('hello closure');
// note outerFunction2 has returned
innerFunction(); // logs hello closure
