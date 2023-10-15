//#Source https://bit.ly/2neWfJ2 
const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

console.log(capitalize('fooBar')); 
console.log(capitalize('fooBar', true));
