let word1 = 'Dylan';
let word2 = 'Israel';

const fullName = word1 + ' ' + word2;

console.log(fullName);
//Dylan Israel  有加' '就會有空格

let word1 = 'Dylan';
let word2 = 'Israel';

const fullName = `${word1} ${word2}`;

console.log(fullName);
//Dylan Israel  加${}就是template literals

let word1 = 'Dylan';
let word2 = 'Israel';
let num1 = 2;
let num2 = 3;

const fullName = `${num1 + num2} ${word2}`;

console.log(fullName);
//5 Israel

let example = 'Hello \n' + 'world';
console.log(example)
//Hello world                   