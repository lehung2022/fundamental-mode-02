//#Source https://bit.ly/2neWfJ2 
const binomialCoefficient = (n, k) => {
    if (Number.isNaN(n) || Number.isNaN(k)) return NaN;
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;
    if (k === 1 || k === n - 1) return n;
    if (n - k < k) k = n - k;
    let res = n;
    for (let j = 2; j <= k; j++) res *= (n - j + 1) / j;
    return Math.round(res);
  };
  console.log(binomialCoefficient(8, 2));
  