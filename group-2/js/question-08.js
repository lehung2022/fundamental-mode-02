//#Source https://bit.ly/2neWfJ2 
const isSorted = arr => {
  let direction = -(arr[0] - arr[1]);
  for (let [i, val] of arr.entries()) {
    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
    if (i === arr.length - 1) return !direction ? 0 : direction;
    else if ((val - arr[i + 1]) * direction > 0) return 0;
  }
};
console.log(isSorted([0, 1, 2, 2]));
console.log(isSorted([4, 3, 2]));
console.log(isSorted([4, 3, 5]));
