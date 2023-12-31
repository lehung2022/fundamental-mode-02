//#Source https://bit.ly/2neWfJ2 
const fromCamelCase = (str, separator = '_') =>
  str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();

console.log(fromCamelCase('someDatabaseFieldName', ' '));
console.log(fromCamelCase('someLabelThatNeedsToBeCamelized', '-'));
console.log(fromCamelCase('someJavascriptProperty', '_'));
