var foo = require('./foo');
foo(); // logs out: "function in file foo"



/*

// name control
var yourChoiceOfLocalName = require('./foo');

// lazy load
if (iReallyNeedThisModule) {
  var foo = require('./foo');
}

// blocks exe till module is loaded
var foo = require('./foo');

// continue exe after it is loaded
console.log('loaded foo');
foo();

*/
