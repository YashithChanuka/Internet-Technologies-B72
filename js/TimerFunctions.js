console.log("TimerFunctions.js is loaded...");

// setTimeout(function, delay) - Executes a function, after waiting a specified number of milliseconds.
// const timeoutId = setTimeout(function () {
//     console.log("Hello world!");
// }, 5000)
//  clearTimeout(timeoutId);

// setInterval(function, interval) - Same as setTimeout(), but repeats the execution of the function continuously.
const intervalId = setInterval(function () {
    console.log("Hello world!");
}, 1000);
// clearInterval(intervalId);