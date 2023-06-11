import mongoose from "mongoose";
import Student from "./Student.mjs"

(async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb")
    .then(() => console.log("Connection Established"));

    await Student.create({ name: "Dileep sai",
        dob: Date.now(),
        address: { street: "Mudfort", area: "Hyderabad", pincode: 500003 },
        email: "KIRANDEEP102030@gmail.com",
        mobileNumber: 8132453442,
        age: 64
    })
    .then((data) => console.log("Data Inserted Successfully", data))
    .catch((e) => console.log("Error while inserting the data", e.message));

    // Aggregation Pipeline

    let data = await Student.updateOne({ name: "Kiran Deep" }, {$set: { email: "KIRANDEEP102030@gmail.com" }})
    console.log(data);

    data = await Student.aggregate([{$match:{age:{$gt:0, $lt: 20}}}, {$count: "count"}])
    console.log(data);

    // Single-purpose aggregation

    data = await Student.where("age").gt(0).lt(20).where("mobileNumber").equals(8106328099);
    console.log(data);

})().catch(e => console.log(e));
