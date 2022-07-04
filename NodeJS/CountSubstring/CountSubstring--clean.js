function countSubstring(mainString, subString){
  let count = 0;
  for (let i = 0; i < mainString.length; i++){
    if (mainString.slice(i).startsWith(subString))
      count++;
  }
  return count;
}

console.log(countSubstring('ABABABC', 'AB'));   // 3
console.log(countSubstring('ABCDCDC', 'CDC'));  // 2