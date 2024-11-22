import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: false,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    mensaje: {
        type: String,
        required: true
    },
    fecha: {
        type: Date
    },
    estado: {
        type: String,
        enum: ["activo", "pendiente", "terminado"],
        default: "activo"
    }
});

const Message = mongoose.model('Message', messageSchema);

export default Message;