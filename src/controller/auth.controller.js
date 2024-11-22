import User from '../model/admin.model.js';
import Message from "../model/message.model.js";
import { createAccessToken } from "../libs/jwt.js";
import { TOKEN_SECRET } from '../config/config.js';
import jwt from 'jsonwebtoken';
import Response from "../model/response.model.js";
import { enviarEmail } from '../services.js';

//funcion para loguearse
export const login = async (req, res) => {
  try {
    // Obtener los datos del usuario
    const { username, password } = req.body;

    // Verificar si el usuario existe
    const existing = await User.findOne({ username });

    if (!existing) {
      return res.status(400).json({ message: 'El usuario no existe' });
    }

    // Comparar la contraseña proporcionada con la contraseña almacenada en la base de datos
    if (password !== existing.password) {
      return res.status(400).json({ message: 'Credenciales incorrectas' });
    }

    // Si el usuario y la contraseña son correctos, generar un token de autenticación
    const token = await createAccessToken({ id: existing._id });

    res.cookie('token', token, {
      sameSite: 'none',
      secure: true,
      httpOnly: false
    });
    res.json({
      message: existing, token
    })

  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

//Funcion para salirse
export const logout = async (req, res) => {
  //Deja el token vacio
  res.cookie("token", "", {
  });
  return res.sendStatus(200);
}

export const sendMessage = async (req, res) => {
  try {
    // Obtener los datos del usuario
    const { nombres, correo, mensaje } = req.body;

    const newMessage = new Message({
      nombres,
      correo,
      mensaje,
      fecha: new Date(),
      activo: 'activo'
    });

    await newMessage.save();
    res.status(201).json({ message: "Mensaje enviado correctamente" });
    console.log(newMessage);

  } catch (error) {
    console.error('Error al registrar al mandar el mensaje:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

// Función para responder a un mensaje y marcarlo como terminado
export const sendResponse = async (req, res) => {
  try {
    // Obtener los datos de la respuesta del cuerpo de la solicitud
    const { messageId, responseContent } = req.body;

    // Obtener el mensaje correspondiente utilizando el ID
    const originalMessage = await Message.findById(messageId);

    if (!originalMessage) {
      return res.status(404).json({ message: "Mensaje no encontrado" });
    }

    // Actualizar el estado del mensaje original a "terminado" en la base de datos
    const updatedMessage = await Message.findByIdAndUpdate(
      messageId,
      { estado: 'terminado' },
      { new: true }
    );

    // Crear un nuevo mensaje para representar la respuesta enviada utilizando el modelo Response
    const newResponse = new Response({
      destinatario: originalMessage.correo, // Usar el correo del destinatario del mensaje original
      messageId: updatedMessage._id, // Establecer el ID del mensaje original
      content: responseContent,
      createdAt: new Date()
    });

    // Guardar la respuesta en la base de datos
    await newResponse.save();

    // Enviar correo electrónico utilizando la función enviarCorreoRespuesta
    await enviarEmail(originalMessage.correo, 'Asunto del correo', responseContent);

    // Responder con un mensaje de éxito
    res.status(200).json({ message: "Respuesta enviada y mensaje original marcado como terminado" });

  } catch (error) {
    console.error('Error al responder al mensaje:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const updateStatus = async (req, res) => {
  try {
    // Obtener los datos de la respuesta del cuerpo de la solicitud
    const { messageId } = req.body;

    const originalMessage = await Message.findById(messageId);

    if (!originalMessage) {
      return res.status(404).json({ message: "Mensaje no encontrado" });
    }

    // Actualizar el estado del mensaje original a "terminado" en la base de datos
    const updatedMessage = await Message.findByIdAndUpdate(
      messageId,
      { estado: 'pendiente' },
      { new: true }
    );

    await updatedMessage.save();

    // Enviar correo electrónico utilizando la función enviarCorreoRespuesta
    await enviarEmail(originalMessage.correo, 'Estamos respondiendo tu mensaje, gracias...');

    // Responder con un mensaje de éxito
    res.status(200).json({ message: "Respuesta enviada y mensaje original marcado como terminado" });

  } catch (error) {
    console.error('Error al responder al mensaje:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const getMessages = async (req, res) => {
  try {
    // Utiliza el método find para obtener todos los mensajes
    const messages = await Message.find({ estado: ["activo", "terminado", "pendiente"] });

    console.log(messages)

    // Si no hay mensajes, devuelve un mensaje indicando que no hay mensajes
    if (!messages || messages.length === 0) {
      return res.status(404).json({ message: "No se encontraron mensajes" });
    }

    // Si hay mensajes, devuélvelos en la respuesta
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error al obtener los mensajes:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });
  return res.json({
    id: userFound._id,
    username: userFound.username
  })
  res.send('profile');
}

export const verifyToken = async (req, res) => {
  const { token } = req.cookies

  if (!token) return res.status(401).json({ message: "No autorizado" });

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "No autorizado" });

    const userFound = await User.findById(user.id)

    if (!userFound) return res.status(401).json({ message: "No autorizado" });

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email
    });

  })
}