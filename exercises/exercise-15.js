let counter = 0;
const intervalId = setInterval(() => {
    counter++;
    console.log("Number : " + counter);
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
}, 10500)

