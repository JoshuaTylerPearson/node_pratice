String.prototype.__defineGetter__('red', function (str) {
  //changes console foregrnd to red
  var redCode = '\x1b[31m';

  // reset console foregrnd
  var clearCode = '\x1b[39m';

  return redCode + this + clearCode;
});

console.log('hello world'.red);
