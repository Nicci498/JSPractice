const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['appple', 'kiwi', 'peach']
const mixed = [ 22, 'yo', true, undefined, null, {a:1, b:1}, new Date()]

let val;

//array length
val = numbers.length;
// is array?
val = Array.isArray(numbers);
//get single val
val = numbers[3];

numbers[2] = 100;

val = numbers.indexOf(36);

//MUTATE
numbers.push(250)

console.log(numbers)
console.log(val)