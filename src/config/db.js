import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

//url para conexion a la BD
const URL_DB = "mongodb+srv://adrianrochacon:adrian1234@rasslight.rffkq7i.mongodb.net/?retryWrites=true&w=majority&appName=rasslight";

//Funcion para conectarnos a la base de datos
export const connectDB = async () => {
  try {
    await mongoose.connect(URL_DB, {
    });
    console.log("Conexión exitosa a la base de datos");
  } catch (err) {
    console.error("Error al conectar a la base de datos:", err);
  }
};
