var path = require('path');

// fixes .. and .
// logs on *nix: /foo
// logs on Win*: \foo
console.log(path.normalize('/foo/bar/..'));

// removes duplicate slashes
// logs on *nix: /foo/bar
// logs on Win*: \foo\bar
console.log(path.normalize('/foo//bar/bas/..'));
