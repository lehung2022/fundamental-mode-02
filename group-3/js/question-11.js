//#Source https://bit.ly/2neWfJ2 
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);
console.log(getColonTimeFromDate(new Date()));
