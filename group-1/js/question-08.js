//#Source https://bit.ly/2neWfJ2 
const rearg = (fn, indexes) => (...args) => fn(...indexes.map(i => args[i]));
var rearged = rearg(
  function(a, b, c) {
    return [a, b, c];
  },
  [2, 0, 1]
);
console.log(rearged('b', 'c', 'a'));
