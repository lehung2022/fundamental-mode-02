//#Source https://bit.ly/2neWfJ2 
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

console.log(bottomVisible());
