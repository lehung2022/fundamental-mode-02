//#Source https://bit.ly/2neWfJ2 
const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1);
        return acc.concat(val);
      }, [])
    : [];

console.log(remove([1, 2, 3, 4], n => n % 2 === 0));
