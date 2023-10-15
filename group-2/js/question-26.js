//#Source https://bit.ly/2neWfJ2 
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};
console.log(isAnagram('iceman', 'cinema')); 
console.log(isAnagram('madam', 'madam'));
