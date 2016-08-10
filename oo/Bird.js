function Bird(name) {
  // call Animal constructor
  Animal.call(this,name);

  // any additional init code
}
// setup the prototype chain between Bird and Animal

// create child instance
var bird = new Bird('sparrow');
