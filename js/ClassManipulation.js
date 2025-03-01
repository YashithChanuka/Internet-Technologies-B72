console.log("ClassManipulation.js is loaded...");   

const heading = document.getElementById("heading");
console.log(heading.classList);

// 1. classList.add() - Adds one or more classes to an element
heading.classList.add("new-class", "highlight", "rounded");
console.log(heading.classList);

// 2. classList.remove() - Removes one or more classes from an element
heading.classList.remove("new-class", "highlight", "rounded");

// 3. classList.toggle() - Toggles between a class name (If the class is already present in the classList, toggle() will remove it; if the class is not present, toggle() will add it)
heading.classList.toggle("active");
console.log(heading.classList);

heading.classList.toggle("active");
console.log(heading.classList);