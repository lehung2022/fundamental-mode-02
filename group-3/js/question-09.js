//#Source https://bit.ly/2neWfJ2 
const hammingDistance = (num1, num2) => ((num1 ^ num2).toString(2).match(/1/g) || '').length;
console.log(hammingDistance(2, 3));
console.log(hammingDistance(5, 3));
