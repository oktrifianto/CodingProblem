const checkNumber = x => (x % 2 == 0) ? 'Even': 'Odd';
const p = x => console.log(x);

// check
p(checkNumber(1)); // odd
p(checkNumber(2)); // even
p(checkNumber(3)); // odd
p(checkNumber(7)); // odd