//#Source https://bit.ly/2neWfJ2 
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;
console.log(approximatelyEqual(Math.PI / 2.0, 1.5708));
