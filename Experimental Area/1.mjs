// import fetch from 'node-fetch';

const { time } = require("console");

// const promise = fetch("https://chandan-02.github.io/anime-facts-rest-api/");
// promise.then((request) => console.log(request));

const a = () => "A";
const b = () => {
    setTimeout(() => {
        return "B";
    }, 1000);
}
const c = () => "C";

const printContent = () => {
    console.log(a());
    time.sleep(1000);
    console.log(b());
    console.log(c());
}

printContent();
