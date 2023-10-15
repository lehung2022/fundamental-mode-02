//#Source https://bit.ly/2neWfJ2 
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
console.log(stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'));
