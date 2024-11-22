import jwt  from "jsonwebtoken";
import {TOKEN_SECRET} from "../config/config.js";

//Esta funcion autentica que exista el token del usuario
export const authRequired = (req, res, next) => {
    //Recoge el token
    const {token} = req.cookies;

    //Si no existe el token no dejara avanzar
    if (!token ) return res.status(401).json({message: "No existe un token, no autorizado"});

    //Verifica que el token sea valido
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if(err) return res.status(403).json({message: "Token invalido"});
        
        //Recoge los valores del usuario
        req.user = user
        next();
    
    });
}