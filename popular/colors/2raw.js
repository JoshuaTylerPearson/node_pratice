function getRed(str) {
  // changes console foregrnd to red
  var redCode = '\x1b[31m';

  // reset console foregrnd
  var clearCode = '\x1b[39m';

  return redCode + str + clearCode;
}

console.log(getRed('hello world'));
