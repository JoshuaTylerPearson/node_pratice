// function
function functionName() {
  // function body
  // optional return; // (else returns undifined)
}

//returns
function foo() { return 123;}
console.log(foo()); // 123

function bar() {}
console.log(bar()); // undifined

// immediately exe function
(function herp() {
  console.log('herp was executed');
})();

// use ^ to create new var scope: if, else, while do not
//ex:
var merp = 123;
if (true) {
  var merp = 456;
}
console.log(merp); // 456

// scope using functions
var gerp = 123;
if (true) {
  (function () { // create new scope
    var gerp = 456;
  })();
}
console.log(gerp); // 123

//anon functions
var foo1 = function namedFunction() { // name not used
  console.log('foo1');
}
foo1(); // foo1

var foo2 = function () {              // anon
  console.log('foo2');
}
foo2(); // foo2
