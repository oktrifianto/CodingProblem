/** ---------------------------
 * Change First Letter Only
 * ----------------------------
 * @param   {String} str 
 * @returns New String
 */

function FirstCapitalize(str) {
  let array = str.split(" "); // [ 'i', 'want', 'to', 'here' ]
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1); // [ 'I', 'Want', 'To', 'Here' ]
  }
  return array.join(" "); // joining array
}

// ------- Test ------- //
console.log(FirstCapitalize("i want you here"));
console.log(FirstCapitalize("using bracket notation for character access"));
console.log(FirstCapitalize("i want You here"));