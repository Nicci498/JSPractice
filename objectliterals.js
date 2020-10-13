const person = {
    firstName = 'Nicole',
    lastName = 'White',
    age = 30,
    email = 'nicole.white.dev@gmail.com',
    hobbies = ['travel', 'concerts', 'foodie'], 
    address = {
        city: 'Kihei',
        state: 'HI'
    },
    getBirthYear: function(){
        return 2020 - this.age;
    }
};

let val;

val = person;

//specific val
val = person.firstName;
// val = person['firstName']

val = person.age;
val = person.hobbies;
val = person.hobbies[0];
val = person.address.state;
val = person.address['city']
val = person.getBirthYear();

console.log(val)

const people = [
    {name: 'Wakea', age: 26},
    {name: 'Dani', age: 25}
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
};