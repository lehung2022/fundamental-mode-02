//#Source https://bit.ly/2neWfJ2 
const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);

console.log(isAbsoluteURL('https://google.com')); // true
console.log(isAbsoluteURL('ftp://www.myserver.net')); // true
console.log(isAbsoluteURL('/foo/bar')); // false
