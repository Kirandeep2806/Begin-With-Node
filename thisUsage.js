// this keyword in javascript always returns the object in which the keyword 'this' is embedded.
// In the below example the 'this' keyword is present in the object 'a' and hence the value of 'this' is 'a'.


var a = {
    name: 'kiran',
    age: '18',
    sayName: function () {
        return this;
    }
}

console.log(a.sayName());

// In the below example the 'this' keyword is present in the object 'fn' and hence the value of 'this' is 'fn'.

var a = {
    name: 'kiran',
    age: '18',
    fn: {
        sayName: function () {
            return this;
        }
    }
}

console.log(a.fn.sayName());
