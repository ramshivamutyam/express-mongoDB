import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            require: true,
            unique: true,
        },
    },
    {
        timestamps: true, //createdAt , UpdatedAt timestamps
    }
);

const User = mongoose.model("User", userSchema);
export default User;