//#Source https://bit.ly/2neWfJ2 
const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
console.log(clampNumber(2, 3, 5));
console.log(clampNumber(1, -1, -5));
