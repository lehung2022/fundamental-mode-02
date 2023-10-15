//#Source https://bit.ly/2neWfJ2 
const nodeListToArray = nodeList => Array.prototype.slice.call(nodeList);
console.log(nodeListToArray(document.childNodes));
