import fetch from 'node-fetch';

const promise = fetch("https://chandan-02.github.io/anime-facts-rest-api/");
promise.then((request) => console.log(request));
