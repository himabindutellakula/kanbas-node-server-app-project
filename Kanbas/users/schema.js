import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    _id: String,
    username: { type: String },
    password: { type: String },
    firstName: String,
    email: String,
    lastName: String,
    dob: Date,
    role: {
        type: String,
        enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
        default: "USER",
    },
},
    { collection: "users" });
export default userSchema;