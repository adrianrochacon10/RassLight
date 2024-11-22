import styled from "styled-components";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { useState } from "react";
import { respondMessageRequest, updateStatusRequest } from "../api/message";

const SendMessageModal = ({ estado, cambiarEstado }) => {
  const [responseContent, setResponseContent] = useState("");
  const [error, setError] = useState("");

  const handleResponseChange = (event) => {
    setResponseContent(event.target.value);
    setError(""); // Limpiar el mensaje de error cuando el usuario empiece a escribir
  };

  const handleChange = () => {
    try {
      Swal.fire({
        title: "¿Deseas posponer la respuesta?",
        text: "Se enviara un correo al usuario",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          updateStatusRequest(estado._id, estado.correo);
          cambiarEstado(false);
        }
      });
    } catch (error) {
      console.error("Error al enviar respuesta:", error);
    }
  };

  const handleResponseSubmit = async () => {
    try {
      // Verificar si el contenido de la respuesta está vacío
      if (!responseContent.trim()) {
        setError("La respuesta no puede estar vacía"); // Establecer mensaje de error
        return; // Si está vacío, no hacer nada
      }
      Swal.fire({
        title: "¿Estas seguro de enviar la respuesta?",
        text: "Se enviara un mensaje al correo",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          respondMessageRequest(estado._id, responseContent, estado.correo);
        }
      });
      cambiarEstado(false);
    } catch (error) {
      console.error("Error al enviar respuesta:", error);
    }
  };

  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <NombrePersona>{estado.nombres}</NombrePersona>
              {estado.estado === "activo" ? (
               <BotonPendiente onClick={handleChange}>
               <LetraBoton>Pendiente</LetraBoton>
             </BotonPendiente>
              ) : (
                <LetraBoton></LetraBoton>
              )} 
              <BotonCerrar onClick={() => cambiarEstado(false)}>
                Cerrar
              </BotonCerrar>
            </EncabezadoModal>
            <TablaDatos>
              <TablaFila>
                <TablaEtiqueta>Correo:</TablaEtiqueta>
                <TablaDato>{estado.correo}</TablaDato>
              </TablaFila>
              <TablaFila>
                <TablaEtiqueta>Mensaje:</TablaEtiqueta>
                <TablaDato>{estado.mensaje}</TablaDato>
              </TablaFila>
            </TablaDatos>
            <FormularioRespuesta onSubmit={handleResponseSubmit}>
              <label htmlFor="responseContent">Respuesta:</label>
              <textarea
                id="responseContent"
                name="responseContent"
                value={responseContent}
                onChange={handleResponseChange}
                rows="4"
                // Estilo para remarcar la textarea si hay un error
                style={{ borderColor: error ? "red" : "" }}
              />
              {error && <MensajeError>{error}</MensajeError>}
              {/* Deshabilitar el botón de enviar si el contenido del textarea está vacío */}
              <BotonEnviar type="submit" disabled={!responseContent.trim()}>
                Enviar
              </BotonEnviar>
            </FormularioRespuesta>
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

SendMessageModal.propTypes = {
  estado: PropTypes.shape({
    nombres: PropTypes.string.isRequired,
    correo: PropTypes.string.isRequired,
    mensaje: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  cambiarEstado: PropTypes.func.isRequired,
};

export default SendMessageModal;
const MensajeError = styled.p`
  color: red;
  margin-top: 5px;
`;

const BotonPendiente = styled.div`
  width: 6rem;
  height: 2rem;
  margin-left: 12rem;
  border-radius: 10px;
  background: rgb(255 88 100);
  &:hover {
    background-color: rgb(217 18 37);
  }
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const LetraBoton = styled.p`
  text-align: center;
  line-height: 2rem;
  color: aliceblue;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BotonEnviar = styled.button`
  background-color: rgb(59 130 246);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(59 15 340);
  }
`;

const FormularioRespuesta = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContenedorModal = styled.div`
  width: 80%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  background: #fff;
  padding: 20px;
`;

const EncabezadoModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const NombrePersona = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const TablaDatos = styled.div`
  margin-bottom: 20px;
`;

const TablaFila = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const TablaEtiqueta = styled.div`
  width: 120px;
  font-weight: bold;
`;

const TablaDato = styled.div`
  flex: 1;
`;

const BotonCerrar = styled.button`
  background: rgb(59 130 246);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgb(59 15 340);
  }
`;
