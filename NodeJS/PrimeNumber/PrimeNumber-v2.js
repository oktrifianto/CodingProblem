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
const dataTest = [0, 1, 2, 3, 10, 19, 27, 25, 29];
for (let i = 0; i < dataTest.length; i++)
  console.log(isPrime(dataTest[i]));