// Let's see module exports in this file

const PI = 3.14;
const calculatePerimeter = (a) => 4*a;
const calculateArea = (a) => a*a;

module.exports.perimeterCalculator = calculatePerimeter
module.exports.areaCalculator = calculateArea
module.exports.pi = PI


// The above is the dot representation, he same can be achieved via square brace representation, here "module.exports" on left of "perimeterCalculator" represents that we are adding the "perimeterCalculator" to the "module.exports"

// We can consider the "module.exports" as object dtype in JS

/*
It looks like

module.exports["perimeterCalculator"] = calculatePerimeter
module.exports["areaCalculator"] = calculateArea

*/

if(require.main == module) { // it is like if __name__ == "__main__" in python
    console.log(module.exports.perimeterCalculator(10));
    console.log(module.exports.areaCalculator(10));
}
