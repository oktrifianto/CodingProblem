/** --------------------------
 * Plus One
 * @param {*} digits 
 * @see https://leetcode.com/problems/plus-one/
 */
const plusOne = digits => {
  let num = '';
  for (let i = 0; i < digits.length; i++){
    num += digits[i];
  }
  num = BigInt(num) + BigInt(1);
  // convert to string and split
  return num.toString().split('');
}

console.log(plusOne([1,2,3]));    // expected [1, 2, 4]
console.log(plusOne([4,3,2,1]));  // expected [4, 3, 2, 2]
console.log(plusOne([9]));        // expected [1, 0]
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));