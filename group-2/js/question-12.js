//#Source https://bit.ly/2neWfJ2 
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

console.log(isPlainObject({ a: 1 }));
console.log(isPlainObject(new Map()));
