//#Source https://bit.ly/2neWfJ2 
const isPrime = num => {
    const boundary = Math.floor(Math.sqrt(num));
    for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;
    return num >= 2;
  };
  
  console.log(isPrime(11));
  console.log(isPrime(17));
  console.log(isPrime(8));
  