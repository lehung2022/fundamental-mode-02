//#Source https://bit.ly/2neWfJ2 
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
console.log(deepFlatten([1, [2], [[3], 4], 5]));
