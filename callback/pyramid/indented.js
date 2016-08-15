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

first('data', function (text1) {
  second(text1, function (text2) {
    third(text2, function (text3) {
      console.log('done', text3); // indented
    });
  });
});
