import { writeFile } from 'fs';

const data = "Hello all. This is the text file!!!";
writeFile("./temp.txt", data, {flag: 'w', encoding: 'utf8'}, (err) => {
    if(err)
        throw err;
    console.log("Data is written into temp file!!")
})
