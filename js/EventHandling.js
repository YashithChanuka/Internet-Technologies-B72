console.log("EventHandling.js is loaded...");

const saveBtn = document.getElementById("btnSave");

// 1. addEventListener() - Attaches an event handler to the specified element.
saveBtn.addEventListener("click", handleClick);

function handleClick() {
    console.log("Button is clicked...");
}

// 2. removeEventListener() - Removes an event handler that has been attached with the addEventListener() method.
saveBtn.removeEventListener("click", handleClick);