define(['./foo', './bar'], function (foo, bar) {
  foo();
  bar.log();
});

/*
// conditonal load module in AMD
define(['./foo', './bar'], function (foo, bar) {
  if (iReallyNeedThisModule) {
    require(['./bas'], function(bas){
      // continue code here.
  })
  }
});
*/
