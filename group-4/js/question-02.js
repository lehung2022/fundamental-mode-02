//#Source https://bit.ly/2neWfJ2 
const elementContains = (parent, child) => parent !== child && parent.contains(child);

console.log(elementContains(document.querySelector('head'), document.querySelector('title')));
console.log(elementContains(document.querySelector('body'), document.querySelector('body')));
