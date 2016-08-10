String.prototype.red = function () {
  //changes console foregrnd to red
  var redCode = '\x1b[31m';

  // reset console foregrnd
  var clearCode = '\x1b[39m';

  return redCode + this + clearCode;
}

console.log('hello world'.red());
