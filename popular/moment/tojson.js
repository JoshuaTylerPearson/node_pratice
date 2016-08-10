var foo = {};
var bar = {'foo': foo};

// uncustomized serialization
console.log(JSON.stringify(bar)); // {"foo":{}}

// customize serialization
foo.toJSON = function () { return "custom" };
console.log(JSON.stringify(bar)); // {"foo":"custom"}
