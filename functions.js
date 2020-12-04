//declarations
function greet(firstName = 'John', lastName = 'Doe'){
    // console.log('Hey')
    return 'Hello ' + firstName + ' ' + lastName;
}

function play(num){
    if(num % 3 !== 0){
        return 'Duck'
    } else{
        return 'Goose'
    }
}

//call it
greet();
console.log(greet('Kea', 'Po'));
play(7);
console.log(play(4))
console.log(play(6))

//expressions

const square = function(x = 2){
    return x * x;
};

square(3);
console.log(square(4));

const meeting = function(day){
    if(day.tolowercse() === 'tuesday' || day.tolowercse() === 'thursday'){
        return true
    } else {
        return false
    }
}

//iffy immediately invokable function expression

// (function(){
//     console.log('iffy ran');
// })();

// (function(name){
//     console.log('Hello ' + name);
// })('Kea');

//property methods

const todo = {
    add: function(){
        console.log('added')
    }, 
    edit: function(id){
        console.log( id + ' edited')
    }
}

todo.delete = function(){
    console.log('deleted')
}

todo.freakout = function(){
    console.log('aaahhhhhh FREAKOUT')
}