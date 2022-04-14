/**
 * Check Prime Number
 * @param {number} x
 * @see   https://thirdspacelearning.com/blog/what-is-a-prime-number/
 * 0 and 1 not prime number
 * 2 is smaller prime number
 * 2, 3, 5, 7, ... 
 * @return string
 */
const isPrime = x =>{
  let f = true;

  // check equal to 1
  if (x === 1){
    return '1 is not prime nor composite number';
  } else if (x > 1){
    
    for (let i = 2; i < x; i++){

      // check not prime
      if (x % i == 0){
        f = false;
        break;
      }

    }

    if (f){
      return `${x} is a prime number`;
    } else {
      return `${x} is not prime number`;
    }

  // number less than 1
  } else {
    return `${x} is not prime number`;
  }
}

const p = x => console.log(x); // print only

// test //
p(isPrime(19));
p(isPrime(12));
p(isPrime(13));
p(isPrime(2));
p(isPrime(1));
p(isPrime(0));
p(isPrime(-2));
p(isPrime(-4));