/** ============
 * Factorial
 * =============
 * n! = n * (n - 1) * (n - 2) * ... * 1 
 */
const factorial = n => {
  if (n == 0 || n == 1) return 1;
  val = 1;
  while (n > 1){
    val = val * n;
    n--;
  }
  return val;
}

// TEST VALUE //
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));