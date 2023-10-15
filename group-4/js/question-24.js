//#Source https://bit.ly/2neWfJ2 
const btoa = str => new Buffer(str, 'binary').toString('base64');
console.log(btoa('foobar'));
