//#Source https://bit.ly/2neWfJ2 
const intersectionBy = (a, b, fn) => {
    const s = new Set(b.map(x => fn(x)));
    return a.filter(x => s.has(fn(x)));
  };
  
  console.log(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor));
  