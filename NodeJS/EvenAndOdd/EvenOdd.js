/**
 * Check Number -> Even or Odd
 * @param {number} x 
 * @returns string
 */
const checkNumber = x => {
  if (x % 2 == 0){
    return 'Even';
  }
  return 'Odd';
}

const p = x => console.log(x);

p(checkNumber(0)); // even
p(checkNumber(1)); // odd
p(checkNumber(2)); // even
p(checkNumber(10)); // even