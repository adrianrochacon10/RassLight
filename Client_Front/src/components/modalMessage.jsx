import styled from "styled-components";
import PropTypes from "prop-types";
import { formatDate } from "../pages/principal.jsx"; 

const Modal = ({estado, cambiarEstado }) => {
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <NombrePersona>{estado.nombres}</NombrePersona>
              <BotonCerrar onClick={() => cambiarEstado(false)}>Cerrar</BotonCerrar>
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
              <TablaFila>
                <TablaEtiqueta>Fecha:</TablaEtiqueta>
                <TablaDato>{formatDate(estado.fecha)}</TablaDato>
              </TablaFila>
            </TablaDatos>
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

Modal.propTypes = {
  estado: PropTypes.shape({
    nombres: PropTypes.string.isRequired,
    correo: PropTypes.string.isRequired,
    mensaje: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired
  }).isRequired,
  cambiarEstado: PropTypes.func.isRequired
};

export default Modal;

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

