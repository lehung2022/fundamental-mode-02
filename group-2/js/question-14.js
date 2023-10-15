//#Source https://bit.ly/2neWfJ2 
const isObject = obj => obj === Object(obj);

console.log(isObject([1, 2, 3, 4]));
console.log(isObject([]));
console.log(isObject(['Hello!']));
console.log(isObject({ a: 1 }));
console.log(isObject({}));
console.log(isObject(true));
