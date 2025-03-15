console.log("EventListeners is loading...");

// const box = document.querySelector('.box');

// ======== Mouse events =========

// ========== single click event ==========
// box.addEventListener('click', function () { 
//     console.log("Clicked the box!");
// })

// ========== double click event ==========
// box.addEventListener('dblclick', function() {
//     console.log("Double clicked the box");
// })

// ========= mouse-down event ==========
// box.addEventListener('mousedown', function () {
//     console.log("Mouse Pressed.");
// });

// ========= mouse-up event ==========
// box.addEventListener('mouseup', function () {
//     console.log("Mouse Released.");
// })

// ========= mouse-move event ==========
// box.addEventListener('mousemove', function () {
//     console.log("Mouse Moved.");
// })

// ========= mouse-over event ==========
// box.addEventListener('mouseover', function () { 
//     console.log("Mouse Over.");
// })

// ========= mouse-out event ==========
// box.addEventListener('mouseout', function () { 
//     console.log("Mouse Out.");
// })

// ======= Keyboard events =========

// ========= key-down event ==========
let input = document.getElementById("input");

// input.addEventListener('keydown', function (event) {
//     // console.log(event.key);
//     if (event.key === 'Enter') {
//         alert("You pressed Enter key.");
//     }
// });

// ========= key-up event ==========
// input.addEventListener('keyup', function (event) {
//     console.log(event.key);
// });

// example
input.addEventListener('keydown', function (event) { 
    // console.log(event.keyCode);
    let keyCode = event.keyCode;

    if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)) {
        return;
    }
    event.preventDefault();
})
