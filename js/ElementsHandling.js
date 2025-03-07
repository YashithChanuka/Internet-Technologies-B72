console.log("ElementsHandling.js is loaded...");

// 1. createElement() - Creates a new element with the specified tag name.
const newDiv = document.createElement("div");

newDiv.id = "alert-success";
newDiv.className = "alert alert-success";
newDiv.textContent = "Successfully Created!";
newDiv.style.backgroundColor = "green";
newDiv.style.color = "white";
newDiv.style.borderRadius = "12px";
newDiv.style.padding = "10px";
newDiv.style.marginTop = "10px";
console.log(newDiv);

const card = document.querySelector(".card");

// 2. append() - Inserts a set of Node objects or DOMString objects after the last child of the ParentNode.
card.append(newDiv);

// remove element
// card.remove();

const newDiv2 = document.createElement('div');
newDiv2.id = 'alert-dange';
newDiv2.className = 'alert alert-danger';
newDiv2.textContent = "Error Occured!";
newDiv2.style.backgroundColor = 'red';
newDiv2.style.color = 'white';
newDiv2.style.padding = '10px';
newDiv2.style.borderRadius = '12px';
newDiv2.style.marginTop = '12px';

card.append(newDiv2);

// clone the element
const clonedDiv = newDiv2.cloneNode(true);
card.append(clonedDiv);

console.log(card.hasChildNodes()); 

// remove element
// card.remove();