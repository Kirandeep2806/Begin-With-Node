// Let's import the square.js over here
const square = require("./square.js")

// Let's import the circle.js over here
const circle = require("./circle")

let area = circle.circleArea(4)
let circumference = circle.circleCircumference(5)
let pi = circle.circlePI;

console.log(`Area : ${area}\nCircumference : ${circumference}\nPI = ${pi}`)


// console.log(square)

let perimeter = require("./square").perimeterCalculator(24.5);
area = square.areaCalculator(5.2); // We can write the above as like this too
pi = square.pi;

console.log(`Area : ${area}\nPerimeter : ${perimeter}\nPI : ${pi}`)
