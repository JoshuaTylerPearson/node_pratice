function first(data, cb) {
  console.log('executing first');
  setTimeout(cb, 1000, data);
}

function second(data, cb) {
  console.log('executing second');
  setTimeout(cb, 1000, data);
}

function third(data, cb) {
  console.log('executing third');
  setTimeout(cb, 1000, data);
}

//named hnadlers
function handleThird(text3) {
  console.log('done', text3); // no indent
}

function handleSecond(text2) {
  third(text2, handleThird);
}

function handleFirst(text1) {
  second(text1, handleSecond);
}

// start the chain
first('data', handleFirst);
