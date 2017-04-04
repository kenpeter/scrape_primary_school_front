const input = 'Southmoor Primary School,Moorabbin,VIC,3189';

let output = '';

// https://stackoverflow.com/questions/5217557/how-can-i-remove-chars-between-indexes-in-a-javascript-string
let myindex = input.indexOf(',VIC');
let lastpart = input.substr(myindex);
output = input.replace(lastpart, '');

console.log(myindex);
console.log(lastpart);
console.log(output);
