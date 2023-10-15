//#Source https://bit.ly/2neWfJ2 
const partialRight = (fn, ...partials) => (...args) => fn(...args, ...partials);
const greet = (greeting, name) => greeting + ' ' + name + '!';
const greetJohn = partialRight(greet, 'John');
console.log(greetJohn('Hello'));
