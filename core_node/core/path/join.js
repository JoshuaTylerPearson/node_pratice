var path = require('path');

// logs on *nix: foo/bar/bas
// logs on Win*: foo\bar\bas
console.log(path.join('foo', '/bar', 'bas'));
