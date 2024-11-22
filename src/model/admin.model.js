// Modelo de usuario 
import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    apPaterno: {
        type: String,
        required: true
    },
    apMaterno: {
        type: String,
    },
    correo: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,

    },
});

const User = mongoose.model('User', userSchema);

export default User;