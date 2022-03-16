/** ============
 * Factorial
 * =============
 * n! = n * (n - 1) * (n - 2) * ... * 1 
 */
const factorial = n => {
  if (n == 0 || n == 1) return 1;
  let val = 1;
  while (n > 1){
    val = val * n;
    n--;
  }
  return val;
}

// TEST VALUE //
const amount = 10;
for (let i = 0; i <= amount; i++) console.log(factorial(i));