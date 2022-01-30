const circle = require("./circle")
const square = require("./square")

console.log(circle.circleArea(4))
console.log(circle.circleCircumference(5.5))
console.log(circle.circlePI)


console.log(square.areaCalculator(4.6))
console.log(square.perimeterCalculator(8.3))

const chalk = require("chalk")
const error = chalk.white.bold.italic.underline.bgRed
const success = chalk.green
const warning = chalk.white.bgHex("#de811d")
console.log(chalk.blue("Water"))
console.log(error("Error!"))
console.log(success("Green Light"))
console.log(warning("Khabardaar...!!"))
