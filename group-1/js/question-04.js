//#Source https://bit.ly/2neWfJ2 
const omitBy = (obj, fn) =>
  Object.keys(obj)
    .filter(k => !fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

console.log(omitBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'));
