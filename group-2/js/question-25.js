//#Source https://bit.ly/2neWfJ2 
const isArrayLike = val => {
    try {
        return [...val], true;
    } catch (e) {
        return false;
    }
};
console.log(isArrayLike(document.querySelectorAll('.className'))); // true
console.log(isArrayLike('abc')); // true
console.log(isArrayLike(null)); // false
