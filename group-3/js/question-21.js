//#Source https://bit.ly/2neWfJ2 
const forOwnRight = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .forEach(key => fn(obj[key], key, obj));

console.log(forOwnRight({ foo: 'bar', a: 1 }, v => console.log(v)));
