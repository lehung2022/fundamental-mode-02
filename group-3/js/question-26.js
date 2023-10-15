//#Source https://bit.ly/2neWfJ2 
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

console.log(findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
));
