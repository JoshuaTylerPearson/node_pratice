// Animal base class
function Animal(name) {
  this.name = name;
}
Animal.prototype.walk = function (destination) {
  console.log(this.name, 'is walking to', destination);
};

var animal = new Animal('elephant');
animal.walk('melbourne'); // elephant is walking to melbourne


// Bird child class
function Bird(name) {
  // call Animal constructor
  Animal.call(this,name);

  // any additional init code
}
// setup the prototype chain between Bird and Animal
// V DO NOT DO
Bird.prototype.__proto__ = Animal.prototype;
Bird.prototype.fly = function (destination) {
  console.log(this.name, 'is flying to', destination);
}

// create child instance
var bird = new Bird('sparrow');
bird.walk('sydney');  // sparrow is walking to sydney
bird.fly('melbourne'); // sparrow is flying to melbourne
