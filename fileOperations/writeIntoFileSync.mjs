import { writeFileSync } from "fs";

const data = "Cool another content to go!!!"
try {
    writeFileSync("./temp.txt", data, {flag: 'w', encoding: 'utf8'});
    console.log("Data written into file successfully!!")
} catch (error) {
    if(error)
        throw error;
}
