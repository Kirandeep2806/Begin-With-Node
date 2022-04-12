import fetch from 'node-fetch';

const apiURL = "https://anime-facts-rest-api.herokuapp.com/api/v1";

const getAnime = async () => {
    // await can be applied on the function which is returning Promises, and takes care that not statements are executed before the Promise is resolved
    const response = await fetch(`${apiURL}`);
    // const data = response.json();
    const data = await response.json();
    // console.log(data);
    return data;
    // In the above 2 await call both fetch and response.json are returning Promises, so we can use await on both of them.
}

getAnime();

console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");

// const a = () => "A";
// const b = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => reject("B"), 1000);
//     });
// }
// const c = () => "C";

// const printContent = async() => {
//     console.log(a());
//     console.log(await b().catch(err => console.log("Kiran")));
//     console.log(c());
// }

// printContent();
