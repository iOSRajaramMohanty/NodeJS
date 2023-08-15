const { Person } = require('../lib/person');

/*
* instantiate object
*/
let person1 = new Person(1, 'John Doe', '4-3-1980');
let person2 = new Person(1, 'Mary Smith', '3-6-1970');

// console.log(person1);
// console.log(person2);

let people = [person1, person2];

for (let person of people) {
    console.log(person.getIdName(), person.getBirthYear());
}

// Complete following
// 1. Define one more class in lib/person.js
// 2. Instantiate object of that class in a separate file and use the class.
// 3. Try defining data in this file adn use it in the other file.
