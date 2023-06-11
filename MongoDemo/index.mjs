import mongoose from "mongoose";
import Student from "./Student.mjs"

(async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb")
    .then(() => console.log("Connection Established"));

    await Student.create({ name: "Kiran Deep" })
    .then((data) => console.log("Data Inserted Successfully", data))
    .catch((e) => console.log("Error while inserting the data"));


})().catch(e => console.log(e));
