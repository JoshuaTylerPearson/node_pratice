process.stdin.on('readable', function () {
  var buf = process.stdin.read();
  if (buf != null) {
    console.log('got:');
    proces.stout.write(buf.toString());
  }
  else {
    console.log('read complete');
  }
});
