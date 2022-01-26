// Let's import the square.js over here

const square = require("./square.js")

// console.log(square)

const perimeter = require("./square").perimeterCalculator(24.5);
const area = square.areaCalculator(5.2); // We can write the above as like this too
const pi = square.pi;

console.log(`Area : ${area}\nPerimeter : ${perimeter}\nPI : ${pi}`)
