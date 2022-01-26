// Let's see module exports in this file

const calculatePerimeter = (a) => 4*a;
const calculateArea = (a) => a*a;

module.exports.perimeterCalculator = calculatePerimeter
module.exports.areaCalculator = calculateArea


// The above is the dot representation, he same can be achieved via square brace representation, here "module.exports" on left of "perimeterCalculator" represents that we are adding the "perimeterCalculator" to the "module.exports"

// We can consider the "module.exports" as object dtype in JS

/*
It looks like

module.exports["perimeterCalculator"] = calculatePerimeter
module.exports["areaCalculator"] = calculateArea

*/

console.log(module.exports.perimeterCalculator(10));
console.log(module.exports.areaCalculator(10));
