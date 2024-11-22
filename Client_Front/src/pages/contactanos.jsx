import { useForm } from "react-hook-form";
// Importar estilos
import { useState } from "react";
import "../css/style-index.css";
// Importar imagenes
import Logo from "../assets/images/logo.png";
import { useMessage } from "../context/MessageContext.jsx";
import Swal from 'sweetalert2';
// import { useHistory } from "react-router-dom";

// Importar Componentes
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

function Contactanos() {
  const { register, handleSubmit, formState: { errors }} = useForm();
const correoError = errors.correo;

  // const history = useHistory()
  const { createMessage } = useMessage();
  const [formCompleted, setFormCompleted] = useState(false);

  const onSubmit = handleSubmit((data) => {
    createMessage(data);
    Swal.fire({
      title: 'Mensaje enviado',
      text: 'Gracias por ponerte en contacto con nosotros',
      icon: 'success',
      confirmButtonText: 'Cerrar'
    }).then(() => {
      // Redireccionar al usuario después de cerrar el SweetAlert
      window.location.href = '/';
    });
  });

   // Función para verificar si los campos están completos
   const checkFormCompletion = () => {
    const correo = document.getElementById("correo").value;
    const nombres = document.getElementById("nombres").value;
    const mensaje = document.getElementById("mensaje").value
    setFormCompleted(correo !== "" && nombres !== "" && mensaje !== "");
  };
  return (
    <div>
      {/* // Codigo Html */}
     {/* Importar Header */}
     <Header></Header>
     
      <img src={Logo} className="logo-pic" alt="Imagen Descriptiva" />

      <form
          className="w-full max-w-sm"
          onSubmit={handleSubmit(onSubmit)}
          onChange={checkFormCompletion} // Verificar los cambios en los campos de entrada
        >
        <div className="mb-4">
          <label htmlFor="nombres">Nombres:</label>
          <input
            type="text"
            className={`h-9 focus:bg-sky-100 bg-slate-100 border-s-0 border-1 border-teal-400 border-indigo-500/100 ${
              errors.nombres ? "border-red-500" : "" // Si hay un error en 'correo', establece el borde rojo
            }`}
            name="nombres"
            id="nombres"
            {...register("nombres", { required: true })}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="correo">Correo:</label>
          <input
            type="email"
            className={`h-9 focus:bg-sky-100 bg-slate-100 border-s-0 border-1 border-teal-400 border-indigo-500/100 ${
              correoError ? "border-red-500" : "" // Si hay un error en 'correo', establece el borde rojo
            }`}
            name="correo"
            id="correo"
            {...register("correo", { required: true })}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
           className={`h-9 focus:bg-sky-100 bg-slate-100 border-s-0 border-1 border-teal-400 border-indigo-500/100 ${
            errors.mensaje ? "border-red-500" : "" // Si hay un error en 'correo', establece el borde rojo
          }`}
            name="mensaje"
            id="mensaje"
            {...register("mensaje", { required: true })}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
              type="submit"
              disabled={!formCompleted}
              id="botonIngresar"
              className={`rounded-full text-white p-2 w-36 ${
                formCompleted
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "disabled-button"
              }`}
            >
              Enviar
            </button>
        </div>
      </form>
            {/* Importar Footer */}
        <Footer></Footer>
    </div>
  );
}

export default Contactanos;
