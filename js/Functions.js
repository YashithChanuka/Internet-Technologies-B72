console.log("Functions.js is loaded...");

// 1. Function Declaration
function greet(firstName) { 
    if (typeof firstName === "undefined") {
        console.log("Hello World!");
    } else { 
        // console.log("Hello " + firstName);
        // console.log("Hello ", firstName);
        console.log(`Hello ${firstName}!`); // Template literals
    }
}
greet("Yashith");
greet();

console.log("====================");    

// 2. Function Expression
let greet2 = function (firstName) { 
    console.log(`Hello ${firstName}!`);
}
greet2("John");

console.log("====================");

// 3. Arrow Function
let greet3 = firstName => { 
    console.log(`Hello ${firstName}!`);
}
greet3("Doe");

// Arrow function without parameters
let greet8 = () => console.log(`Hello!`);

let greet4 = firstName => console.log(`Hello ${firstName}!`);

// 4. Default Parameters - You can assign default values to function parameters.
let greet5 = (firstName = "SAM") => { 
    console.log(`Hello ${firstName}!`);
}
greet5();
greet5("Yashith");

// 5. Rest Parameters - Allows you to represent an indefinite number of arguments as an array.
let sum = (...numbers) => { 
    numbers.forEach(number => console.log(number));
}
sum(1, 2, 3, 4, 5);