/**
 * @description   Create fibonacci sequence number
 * @param         val (int)
 * @returns       int
 */
const fib = val => {
  if (val == 0) return 0;
  if (val == 1) return 1;

  a = 0;
  b = 1;
  sum = a + b;

  while (val > 1) {
    sum = a + b;
    a   = b;
    b   = sum;
    val--
  }

  return sum
}

// Test Values //
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));