import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name: String,
})

export default mongoose.model("Student", StudentSchema);
