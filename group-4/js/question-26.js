//#Source https://bit.ly/2neWfJ2 
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
console.log(capitalizeEveryWord('hello world!'));
