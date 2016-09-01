function* generator() {
  var bar = yield 'foo';
  console.log(bar); // bar
}

var iterator = generator();
// start execution till first yield value
var foo = iterator.next();
console.log(foo.value); // foo
// resume execution injecting bar
var nextThing = iterator.next('bar');
