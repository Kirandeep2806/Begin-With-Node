// import fetch from 'node-fetch';

// const promise = fetch("https://chandan-02.github.io/anime-facts-rest-api/");
// promise.then((request) => console.log(request));

const a = () => "A";
const b = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("B"), 1000);
    });
}
const c = () => "C";

const printContent = async() => {
    console.log(a());
    console.log(await b());
    console.log(c());
}

printContent();
