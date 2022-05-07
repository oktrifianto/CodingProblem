/**
 * Get second largest number
 * @param   {Array} num - data array number
 * @return  {Number}
 */
const SecondLargest = num => {
  const sorted        = num.sort((a, b) => a - b); // sorting ascending array
  const array_unique  = [...new Set(sorted)];      // remove duplicate array
  return array_unique[array_unique.length-2];      // get second array from behind
}

// Test //
console.log(SecondLargest([1, 2, 4, 5]));
console.log(SecondLargest([1, 33, 12, 23]));
console.log(SecondLargest([24, 21, 21, 28, 38]));
console.log(SecondLargest([10, 13, 82, 78, 79, 73]));
console.log(SecondLargest([10, 13, 82, 78, 78, 73]));