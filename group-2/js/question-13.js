//#Source https://bit.ly/2neWfJ2 
const isObjectLike = val => val !== null && typeof val === 'object';

console.log(isObjectLike({}));
console.log(isObjectLike([1, 2, 3]));
console.log(isObjectLike(x => x));
console.log(isObjectLike(null));
