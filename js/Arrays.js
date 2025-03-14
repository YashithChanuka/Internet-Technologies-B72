console.log("Arrays.js is loaded...");

// 1. Creating an Array

// Using Array Literal
let colors = ['Red', 'Green', 'Blue'];
console.log(colors);

// Using new keyword and Array Constructor
let colors2 = new Array("Red", "Green", "Blue");
console.log(colors2);

console.log("=========================");

let myArray = [10, 'Kamal', true, undefined, null, { name: 'John' }, [1, 2, 3]];
console.log(myArray);

console.log("=========================");

// 2. Accessing Elements
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]); // undefined

console.log("=========================");

// 3. Modifying Elements
colors[0] = 'Yellow';
console.log(colors);

// 4. Array Length
console.log(colors.length);

console.log("=========================");

// Built-in Array functions

let fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

// 5. push() - Adds new elements to the end of an array
fruits.push('Grapes');
console.log(fruits);

// 6. pop() - Removes the last element from an array
fruits.pop();
console.log(fruits);

// 7. unshift() - Adds new elements to the beginning of an array
fruits.unshift('Strawberry');
console.log(fruits);

// 8. shift() - Removes the first element from an array
fruits.shift();
console.log(fruits);

console.log("=========================");

// 9. concat() - Joins two or more arrays
let vegetables = ['Tomato', 'Potato', 'Onion'];
let items = fruits.concat(vegetables);
console.log(items);

// 10. forEach() - Calls a function for each element in an array
items.forEach(function (item) {
    console.log(item);
})

// 11. map() - Creates a new array with the results of calling a provided function on every element in the array
let upperCaseItems = items.map(item => item.toUpperCase());
console.log(upperCaseItems);
console.log(items);

// 12. filter() - Creates a new array with all elements that pass the test implemented by the provided function
let filteredItems = items.filter(item => item.length > 5);
console.log(filteredItems);