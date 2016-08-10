var date = new Date(Date.UTC(2007, 0, 1));
console.log('orginal', date);

// to JSON
var jsonString = date.toJSON();
console.log(jsonString);  // 2007-01-01T00:00:00:000Z

// from JSON
console.log('Round Tripped', new Date(jsonString));
