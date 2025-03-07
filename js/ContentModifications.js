console.log("ContentModifications.js is loaded...");

// 1. textContent - Gets or sets the texual content of an element
const heading = document.getElementById("heading");
console.log(heading);
console.log(heading.textContent);
heading.textContent = "Hello World!";

// 2. innerHTML - Gets or sets the HTML inside of an element
const card = document.querySelector(".card");
// console.log(card.innerHTML);
// card.innerHTML = "<h2>My Card</h2><p>This is a card</p>";

// 3. innerText - Gets or sets the text content of an element.
console.log(card.innerText);
card.innerText = "Just the text";

// 4. value - Gets or sets the value of an input element.
const input = document.querySelector('input[type="text"]');
console.log(input.value);   
input.value = "Hello World!";