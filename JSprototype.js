// TODO 1: Create an object named shape which has a key is2D having the value true
shape = {is2D: true};
// TODO 2: Create an object named circle which has a key radius having the value 3
circle = {radius: 3};
// TODO 3: Create an object named rectangle which has keys length and breadth having the values 1 and 2 respectively
rectangle = {length: 1, breadth: 2};
// TODO 4: Change the prototype of the circle object to the shape object
circle.__proto__ = shape;
// TODO 5: Print the values of the is2D and radius keys on the circle object
console.log("Is circle a 2D shape?",circle.is2D);
console.log("Radius of circle =",circle.radius);

// TODO 6: Change the prototype of the rectangle object to the shape object
rectangle.__proto__ = shape;
// TODO 7: Print the values of the is2D, length, and breadth keys on the rectangle object
console.log("Is rectangle a 2D shape?",rectangle.is2D);
console.log(`Length of rectangle = ${rectangle.length}, Breadth of rectangle = ${rectangle.breadth}`);


// Prototype in JS is used for inheritance, we can fetch it using the property __proto__
// __proto__ is a property of all objects in JS
// Here we inherit the properties of the shape object to the circle object and rectangle object
// Then we are accessing the properties of the shape object using the circle and rectangle objects
// The circle and rectangle objects have the same properties as the shape object along with their own properties
