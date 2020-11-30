//declarations
function greet(firstName = 'John', lastName = 'Doe'){
    // console.log('Hey')
    return 'Hello ' + firstName + ' ' + lastName;
}

//call it
greet();
console.log(greet('Kea', 'Po'));


//expressions

const square = function(x = 2){
    return x * x;
};

square(3);
console.log(square(4));

//iffy immediately invokable function expression

(function(){
    console.log('iffy ran');
})();

(function(name){
    console.log('Hello ' + name);
})('Kea');