function longRunningOperation(callback) {
  // simulate 3s operation
  setTimeout(callback, 3000);
}

function userClicked() {
  console.log('start long op');
  longRunningOperation(function () {
    console.log('end long op');
  });
}

// simulate uer action
userClicked();
