import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
    street: String,
    area: String,
    pincode: BigInt
})

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "KD Bro"
    },
    dob: {
        type: Date,
        required: true,
    },
    age: {
        required: true,
        type: Number,
        min: 1,
        max: 100
    },
    address: AddressSchema,
    email: {
        type: String,
        lowercase: true
    },
    mobileNumber: {
        type: Number,
        required: true,
        unique: true,
        validate: {
            validator: v => (Number.isInteger(v) && v.toString().length===10),
            message: props => `${props.value} is not a mobile number`
        }
    }
})

export default mongoose.model("Student", StudentSchema);
