// class definition
function someClass() {
  // properties go here
  this.someProperty = 'some initial value';
}
// member functions go here:
someClass.prototype.someMemberFunction = function () {
  /* do something usin this */
  this.someProperty = 'modified value';
}

// creation
var instance = new someClass();

// usage
console.log(instance.someProperty); // some initial value
instance.someMemberFunction();
console.log(instance.someProperty); // modified value
