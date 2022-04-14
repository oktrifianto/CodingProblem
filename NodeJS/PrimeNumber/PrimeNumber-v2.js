/**
 * Check Prime Number
 * - more simple
 */
const isPrime = number => {
  if (number < 2) return `${number} is not prime.`;
  for (let i = 2; i < number; i++)
    if (number % i == 0) // if when checking remainder 0 ==> not prime
      return `${number} is not prime.`;
  return `${number} is PRIME number!`;
}

// test //
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3)); 
console.log(isPrime(10));
console.log(isPrime(13));
console.log(isPrime(19));
console.log(isPrime(27));
console.log(isPrime(25));
console.log(isPrime(29));