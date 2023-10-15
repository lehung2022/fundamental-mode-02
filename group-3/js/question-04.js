//#Source https://bit.ly/2neWfJ2 
const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );

console.log(initializeArrayWithRangeRight(5));
console.log(initializeArrayWithRangeRight(7, 3));
console.log(initializeArrayWithRangeRight(9, 0, 2));
