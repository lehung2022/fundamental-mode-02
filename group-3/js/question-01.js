//#Source https://bit.ly/2neWfJ2 
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};
console.log(intersection([1, 2, 3], [4, 3, 2]));
