process.on('uncaughtException', function (err) {
  console.log('cought exception:', err);
  console.log('stack:', err.stack);
  process.exit(1)
});

// intentionally cause un cought exception
nonexistentFunc();

console.log('this line is never run');
