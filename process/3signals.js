setTimeout(function () {
  console.log('5 seconds passed. exiting');
}, 5000);
console.log('started. will exit in 5s');

process.on('SIGINT', function () {
  console.log('got SIGINT. ingnoring');
});
