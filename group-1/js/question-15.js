//#Source https://bit.ly/2neWfJ2 
const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = pipeFunctions(multiply, add5);

console.log(multiplyAndAdd5(5, 2));
console.log(multiplyAndAdd5(16, 2));
