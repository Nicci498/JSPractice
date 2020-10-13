let val;

const today = new Date();
let birthday = new Date('1-10-1990 11:57:00');
birthday = new Date('January 10 1990');
birthday = new Date('1/10/1990');


val = today.getMonth(); // zero based so JAN == 0
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);


console.log(val);
console.log(typeof val);