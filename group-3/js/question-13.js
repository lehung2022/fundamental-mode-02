//#Source https://bit.ly/2neWfJ2 
const gcd = (...arr) => {
    const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
    return [...arr].reduce((a, b) => _gcd(a, b));
  };
  console.log(gcd(8, 36));
  console.log(gcd(...[12, 8, 32]));
  