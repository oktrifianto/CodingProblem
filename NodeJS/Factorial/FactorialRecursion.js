/**
 * @description   Factorial Using Recursion
 * @param         n (integer)
 * @returns       number
 */
const fact = n => {
  if (n == 0 || n == 1) return 1;
  return n * fact(n - 1);
}

// TEST VALUE //
const amount = 20;
for (let i = 0; i <= amount; i++) console.log(fact(i));