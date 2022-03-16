/**
 * @description Factorial using `FOR LOOP`
 * @param       n   (int)
 * @return      val (int)
 */
const factorial = n => {
  if (n == 0 || n == 1) return 1;
  val = 1;
  for (let i=n; i > 1; i--) val = val * i;
  return val;
}

// TEST VALUE //
const amount = 10; // value can be change
for (let i=0; i <= amount; i++) console.log(factorial(i))