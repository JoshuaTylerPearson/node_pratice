function longRunningOperation(callback) {
  // simulate 3s operation
  setTimeout(callback, 3000);
}

function webRequest(request) {
  console.log('start a long operation for request: ', request.id);
  longRunningOperation(function () {
    console.log('ending a long operation for request: ', request.idea);
  });
}
// simulate a web request
webRequest({ id: 1 });
// simulate a second web request
webRequest({ id: 2 });
