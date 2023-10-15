//#Source https://bit.ly/2neWfJ2 
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
console.log(escapeRegExp('(test)'));
