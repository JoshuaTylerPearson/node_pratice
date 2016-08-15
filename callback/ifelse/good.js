function alwaysSync(args, cb) {
  if (args) { // alredy have data
    // setup call for next tick
    process.nextTick(function () {
      cb('cached data');
    });
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

alwaysSync(true, function (data) {
  foo();
});
bar();
