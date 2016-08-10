var moment = require('moment');

// from date to moment
var wrapped = moment(new Date());
console.log(wrapped);

// from moment to date
var date = wrapped.toDate();
console.log(date);
