// utility function
function fibonacci(n) {
  if (n < 2)
    return 1;
  else
    return fibonacci(n - 2) + fibonacci(n - 1);
}

// set up timer
console.time('timer');
setTimeout(function () {
  console.timeEnd('timer'); // takes longer then 1000ms
}, 1000)

// start long operation
fibonacci(44);
