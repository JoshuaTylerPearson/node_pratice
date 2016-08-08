// prog lang == first class if functions == vars

// higher-order function == function(function(s))
setTimeout(function () {
  console.log('2000 milisecs have passed since start');
}, 2000);

// non anon ver
function foo() {
  console.log('2000 milisecs have passed since start');
}
setTimeout(foo, 2000);
