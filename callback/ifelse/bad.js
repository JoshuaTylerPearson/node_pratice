// WARNING DO NOT USE

function maybeSync(args, cb) {
  if (args) { // alredy have data
    // BAD do not call synchronously
    cb('cached data');
  }
  else { // need to load data
    // simulate db load
    setTimeout(function () {
      cb('loaded data')
    }, 500);
  }
}

function foo() { console.log('foo') }
function bar() { console.log('bar') }

maybeSync(true, function (data) {
  foo();
});
bar();
