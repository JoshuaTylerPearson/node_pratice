// util function
var inherits = require('util').inherits;

// Bird Child class

function Bird(name) {
  // call parent constructor
  Animal.call(this, name);

  // additional constructon code
}
inherits(Bird, Animal);

// additional member functions
Bird.prototype.fly = function (destination) {
  console.log(this.name, 'is flying to', destination);
}

var bird = new Bird('sparrow');
bird.walk('sydney');   // sparrow is walking to sydney
bird.fly('melbourne'); // sparrow is fpying to melbourne
