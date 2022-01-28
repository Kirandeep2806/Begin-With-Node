const foo = () => console.log("Foo");
const bar = () => console.log("Bar");

exports = module.exports
// Reassigning module.exports
module.exports = {
    foo: foo,
    bar : bar
}

console.log(exports)
console.log(module.exports)

module.exports = {}
exports = module.exports
// Assigning via key-value
module.exports.foo = foo;
module.exports.bar = bar;

console.log(exports)
console.log(module.exports)