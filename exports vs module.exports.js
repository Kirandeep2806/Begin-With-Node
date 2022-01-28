exports.foo = () => console.log("Foo");
exports.bar = () => console.log("Bar");

// Implicitly "module.exports = exports"
// and the implicit return type is "module.exports" but not "exports"

// This is sssigning via key-value, as it is reference type, we can do like this also as below

// module.exports.foo = foo;
// module.exports.bar = bar;

// But we can't assign directly like, 

/*
exports = {
    foo: foo,
    bar: bar
}
bcoz this make the reference type to be lost and as said at last module.exports will be returned i.e., {} in this case,
So to make the above syntax work you can write a line,

module.exports = exports
*/

if(!module.parent) {
    console.log("Exports has :", exports)
    console.log("module.exports has :", module.exports)
}
