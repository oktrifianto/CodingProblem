/**
 * @description   Reverse Number 
 * @param         val {int}
 * @returns       int
 */
const reverseNumber = (val) => {
  let reverse = 0;
  while (val > 0){
    remainder = val % 10;
    reverse   = reverse * 10 + remainder;
    val       = Math.floor( val / 10 );
  }
  return reverse;
}

// Test Value //
console.log(reverseNumber(1234));     // 4321   (√)
console.log(reverseNumber(100002));   // 200001 (√)
console.log(reverseNumber(2000));     // return 2 (next improvement)