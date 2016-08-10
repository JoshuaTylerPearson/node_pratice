console.time('timeit');
function fibonacci(n) {
  if (n < 2)
    return 1;
  else
    return fibonacci(n - 2) + fibonacci(n - 1);
}
fibonacci(44)             // arbitrary nubmer based on sys performance
console.timeEnd('timeit') // ~= 13.5s local sys
