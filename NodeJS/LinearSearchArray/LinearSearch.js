/**
 * @description   Search number of index from array
 * @param         target  {int}
 * @param         data    {array}
 * @returns       index
 */
const LinearSearch = (target, data) => {
  for ( let i=0; i < data.length; i++ )
    if ( data[i] == target ) return i;
  return -1;
}

console.log(LinearSearch(3, [23, 44, 24, 69, 200]));    // -1  
console.log(LinearSearch(44, [23, 44, 24, 69, 200]));   // 1
console.log(LinearSearch(100, [23, 44, 24, 69, 200]));  // -1
console.log(LinearSearch(69, [23, 44, 24, 69, 200]));   // 3