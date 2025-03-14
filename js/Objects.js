console.log("Objects.js is loaded...");

// Creating an object - Object Literal
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    },
    getBirthYear: function () {
        return 2025 - this.age;
    }
}

console.log(person);

// 1. Accessing object properties

// - Dot notation
console.log(person.firstName);
console.log(person.lastName);
console.log(person.address.city);
console.log(person.getBirthYear());

console.log("====================");

// - Bracket notation
console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['address']['city']);
console.log(person['getBirthYear']());

console.log("====================");

// 2. Adding properties
person.phone = "083823694";
console.log(person);

console.log("====================");

// 3. Modify properties
person.firstName = "Yashith";
console.log(person);

console.log("====================");

// 4. Delete properties
delete person.phone;
console.log(person);

let car = {
    brancd: 'Toyota',
    model: 'Corolla',
    year: 2022,
    getDescription: function () { 
        return `The ${this.brancd} - ${this.model} - ${this.year}`;
    }
}
let description = car.getDescription();
console.log(description);

console.log("====================");

// Looping object properties
for (let key in person) { 
    console.log(person[key]);
}

console.log("====================");

// Object Destructing
let { firstName, lastName, age } = person;
console.log(firstName);
console.log(lastName);
console.log(age);
// console.log(hobbies); // ReferenceError: hobbies is not defined

console.log("====================");

// Built-in Object functions

// 1. Object.keys()
console.log(Object.keys(person));

console.log("====================");

// 2. Object.values()
console.log(Object.values(person));

console.log("====================");

// 3. Object.entries()
console.log(Object.entries(person));

// Class definition
class Student { 
    constructor(firstName, lastName, age) { 
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() { 
        return `${this.firstName} ${this.lastName}`;
    }
}

let student = new Student('John', 'Doe', 30);
console.log(student);
