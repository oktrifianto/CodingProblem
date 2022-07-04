/** ------------------
 * Inspired from Book
 * -------------------
 * 
 * Why check using Math.sqrt() ?
 *  @see 
 *  https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-number-to-determine-if-the-number-is?answertab=trending#tab-top
 */
const isPrime = number => {
  for (let i = 2; i <= Math.sqrt(number);i++)
    if (number % i === 0) return false;
  return true;
}

console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(6)); // false
/*
console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(5)); // 2.23606797749979
console.log(Math.sqrt(6)); // 2.449489742783178
console.log(Math.sqrt(9)); // 3
*/