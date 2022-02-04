let data = {name: "Kiran Deep",
            age: 23,
            city: "Pune",
            hobbies: ["cricket", "football", "reading"],
            isMarried: false,
            dateOfBirth: "28/06/2003",
};

let data1 = JSON.stringify(data);
console.log("After converting to JSON : ", data1);

let data2 = JSON.parse(data1);
console.log("After converting to JS object : ", data2);
