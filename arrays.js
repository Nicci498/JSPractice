const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['appple', 'kiwi', 'peach']
const mixed = [ 22, 'yo', true, undefined, null, {a:1, b:1}, new Date()]

let val;

//array length
val = numbers.length;

for(val.length){
    console.log('tick')
}

// is array?
val = Array.isArray(numbers);
val = Array.isArray(fruit);
val = Array.isArray(mixed);

//get single val
val = numbers[3];
val = mixed[0];

// insert a val
numbers[2] = 100;
numbers[0] = 4;
numbers[1] = 20;

// find index of a val
val = numbers.indexOf(36);

val = mixed.indexOf(true);

//MUTATE
//add to end
numbers.push(250);
mixed.push(null);
fruit.push('berries');
//remove from end
numbers.pop();
mixed.pop();
//add to front 
numbers.unshift(120);
mixed.unshift('BOO')
//remove from front
numbers.shift();
// splice vals (start, end)
numbers.splice(1,1);
//reverse
numbers.reverse();

//concat
val = numbers.concat(numbers2);

//sort
val = fruit.sort();

//use compare func
val = numbers.sort(function(x, y){
    return x - y;
});

//reverse sort
val = numbers.sort(function(x, y){
    return y -x;
});

//find first val that meets expectations
function under50(num){
    return num < 50;
};

val = numbers.find(under50);

console.log(numbers)
console.log(val)