const PI = 3.14;
const area = (r) => PI*r*r;
const circumference = (r) => 2*PI*r;

/* 
Other ways of exporting are : 

module.exports.area = (r) => PI*r*r;
module.exports.circumference = (r) => 2*PI*r;
module.exports.PI = 3.14;


In the above case both key and value will be the same
*/

// Another way of adding to exports

module.exports = {
    circleArea : area,
    circleCircumference : circumference,
    circlePI : PI
}
