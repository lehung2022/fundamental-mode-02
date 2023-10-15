//#Source https://bit.ly/2neWfJ2 
const geometricProgression = (end, start = 1, step = 2) =>
  Array.from({ length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 }).map(
    (v, i) => start * step ** i
  );
console.log(geometricProgression(256));
console.log(geometricProgression(256, 3));
console.log(geometricProgression(256, 1, 4));
