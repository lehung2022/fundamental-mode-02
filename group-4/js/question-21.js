//#Source https://bit.ly/2neWfJ2 
const atob = str => new Buffer(str, 'base64').toString('binary');
console.log(atob('Zm9vYmFy'));
