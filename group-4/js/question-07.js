//#Source https://bit.ly/2neWfJ2 
const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);

delay(
  function(text) {
    console.log(text);
  },
  1000,
  'later'
);
