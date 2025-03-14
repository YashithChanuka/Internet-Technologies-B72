console.log("Variables.js is loaded...");

// ========== 1. var - function scoped =========
// var x = 10;
// console.log(x);

// function testVar() { 
//     console.log(x);
//     x = 20;
//     console.log(x);
//     var y = 30;
//     console.log(y);
// }
// testVar();
// console.log(x);
// console.log(y);

// ========== 2. let - Block scoped =========
// let x = 10;
// console.log(x);

// function testLet() { 
//     console.log(x);
//     let y = 20;
//     console.log(y);
//     if (true) { 
//         console.log(x);
//         console.log(y);
//         let z = 30;
//         console.log(z);
//         var a = 40;
//     }
//     console.log(y);
//     console.log(z); // ReferenceError: z is not defined
//     console.log(a);
// }
// testLet();

// ========== 3. const =========
const x = 10;
console.log(x);

x = 20;