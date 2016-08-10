var path = require('path');

var completePath = '/foo/bar/bas.html';

// logs : /foo/bar
console.log(path.dirname(completePath));

// logs : bas.html
console.log(path.basename(completePath));

// logs : .html
console.log(path.extname(completePath));
