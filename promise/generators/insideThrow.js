function* generator() {
  try {
    yield 'foo';
  } catch (err) {
    console.log(err.message); // bar
  }
}

var iterator = generator();
// start execution till first yield value
var foo = iterator.next();
console.log(foo.value); // foo
// resume execution throwing exception 'bar'
var nextThing = iterator.throw(new Error('bar'));
