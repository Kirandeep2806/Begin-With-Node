// Hoisting is a JavaScript feature that allows you to declare a variable before you use it.

// What happens in this javascript is that all the declarations are hoisted to the top of the function.


// Example 1
console.log(a);
var a; // replace the var with let or const to see the difference, let and const doen't allow hoisting

// Example 2
const b; // Try to uncomment this line to see the error.
// You can just declare the variable and then assign it later. But for const, you have to assign the value at the time of declaration.

console.log(b);
