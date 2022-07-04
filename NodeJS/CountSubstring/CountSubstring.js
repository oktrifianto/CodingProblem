function countSubstring(mainString, subString){
  let count = 0;
  for (let i = 0; i < mainString.length; i++){
    // console.log(mainString[i]); 
    if (mainString.slice(i).startsWith(subString)){
      // console.log(mainString.slice(i));
      count++;
    }
  }
  return count;
}

console.log(countSubstring('ABABABC', 'AB'));  // 3
console.log(countSubstring('ABCDCDC', 'CDC')); // 2
console.log(countSubstring('ABABABC', 'ABC')); // 1