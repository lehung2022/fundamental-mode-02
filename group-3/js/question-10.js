//#Source https://bit.ly/2neWfJ2 
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
console.log(getType(new Set([1, 2, 3])));
