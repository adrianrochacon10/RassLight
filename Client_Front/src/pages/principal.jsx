import { useEffect, useState } from "react";
import { useMessage } from "../context/MessageContext";
import Modal from "../components/modalMessage.jsx";
import Header from "../components/headerPrincipal.jsx";
import SendMessageModal from "../components/sendMessageModal.jsx";

// eslint-disable-next-line react-refresh/only-export-components
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedDay = day < 10 ? "0" + day : day;
  const formattedMonth = month < 10 ? "0" + month : month;
  const formattedDate = `${formattedDay}-${formattedMonth}-${year} ${hours}:${minutes}`;
  return formattedDate;
};

function Principal() {
  const { getMessages, messages } = useMessage();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [sortOrder, setSortOrder] = useState("reciente");
  const [selectedSection, setSelectedSection] = useState("todos"); //Para el filtro por estado
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [responseContent, setResponseContent] = useState("");

  useEffect(() => {
    getMessages();
  }, [getMessages]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleResponseChange = (event) => {
    setResponseContent(event.target.value);
  };

  const handleResponseSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar cualquier acción necesaria con la respuesta, como enviarla al backend
    console.log("Respuesta enviada:", responseContent);
    // Cerrar el modal después de enviar la respuesta
    setMostrarModal(false);
    // Limpiar el contenido de la respuesta
    setResponseContent("");
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  //Filtro de mensajes
  useEffect(() => {
    const filtered =
      selectedSection === "todos"
        ? messages.filter((message) =>
            message.mensaje.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : messages.filter(
            (message) =>
              message.mensaje
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) &&
              message.estado === selectedSection
          );

    //Dependiendo de la fecha de creacion o por abecedario
    const sorted = [...filtered].sort((a, b) => {
      if (sortOrder === "reciente") {
        return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
      } else if (sortOrder === "viejo") {
        return new Date(a.fecha).getTime() - new Date(b.fecha).getTime();
      } else if (sortOrder === "a-z") {
        return a.nombres.localeCompare(b.nombres);
      } else if (sortOrder === "z-a") {
        return b.nombres.localeCompare(a.nombres);
      }
    });

    setFilteredMessages(sorted);
  }, [messages, searchTerm, sortOrder, selectedSection]);

  //Funcion para decorar el mensaje dependiendo del estado
  function getStatusColor(estado) {
    switch (estado) {
      case "activo":
        return "blue";
      case "pendiente":
        return "red";
      case "terminado":
        return "gray";
      default:
        return "gray";
    }
  }

  return (
    <div>
      <Header></Header>

      <div>
        <div className="flex justify-around mb-4">
          {/* Botones para los apartados de mensajes existentes */}
          <button
            className={`${
              selectedSection === "todos" ? "bg-blue-500" : "bg-gray-300"
            } text-white font-bold py-2 px-4 ${
              selectedSection === "todos" ? "" : "m-2"
            } basis-4/12`}
            onClick={() => handleSectionChange("todos")}
          >
            Principal
          </button>
          {/* Boton para los mensajes con estado activo */}
          <button
            className={`${
              selectedSection === "activo" ? "bg-blue-500" : "bg-gray-300"
            } text-white font-bold py-2 px-4 ${
              selectedSection === "activo" ? "" : "m-2"
            } basis-4/12`}
            onClick={() => handleSectionChange("activo")}
          >
            Activos
          </button>
          {/* Boton para los mensajes con estado pendiente */}
          <button
            className={`${
              selectedSection === "pendiente" ? "bg-blue-500" : "bg-gray-300"
            } text-white font-bold py-2 px-4 ${
              selectedSection === "pendiente" ? "" : "m-2"
            } basis-4/12`}
            onClick={() => handleSectionChange("pendiente")}
          >
            Pendientes
          </button>
          {/* Boton para los mensajes con estado terminado */}
          <button
            className={`${
              selectedSection === "terminado" ? "bg-blue-500" : "bg-gray-300"
            } text-white font-bold py-2 px-4 ${
              selectedSection === "terminado" ? "" : "m-2"
            } basis-4/12`}
            onClick={() => handleSectionChange("terminado")}
          >
            Terminados
          </button>
        </div>
        <div className="rounded-md my-4 mx-auto w-1/2">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Buscar mensajes..."
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
          />
        </div>

        <div className="rounded-md my-4 mx-auto w-1/2">
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
          >
            <option value="reciente">Más Reciente</option>
            <option value="viejo">Más Antiguo</option>
            <option value="a-z">Filtrar por nombre: A-Z</option>
            <option value="z-a">Filtrar por nombre: Z-A</option>
          </select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {filteredMessages.length === 0 ? (
            <div className="text-center text-gray-600 col-span-full">
              No hay mensajes
            </div>
          ) : (
            filteredMessages.map((message) => (
              <div
                key={message.id}
                className="bg-cyan-50 rounded-lg shadow-md overflow-hidden relative m-3"
              >
                <div className="flex-grow p-4">
                  <div
                    className={`bg-${getStatusColor(
                      message.estado
                    )}-500 absolute right-6 rounded-md top-2 w-auto h-8 p-2`}
                  >
                    <p className="text-sm text-white font-bold leading-4">
                      {message.estado}
                    </p>
                  </div>
                  <input type="hidden" value={message.id} />
                  <h3 className="text-lg font-semibold mb-2">
                    {message.nombres}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Correo:</strong> {message.correo}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Mensaje:</strong>{" "}
                    {message.mensaje.length > 20
                      ? `${message.mensaje.substring(0, 20)}...`
                      : message.mensaje}
                    {message.mensaje.length > 20 && (
                      <button
                        onClick={() => cambiarEstadoModal(message)}
                        className="text-blue-500"
                      >
                        Ver más
                      </button>
                    )}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Fecha:</strong> {formatDate(message.fecha)}
                  </p>
                  <div
                    className={`bg-${getStatusColor(
                      message.estado
                    )}-500 absolute w-3 right-0 bottom-0 h-48`}
                  />
                </div>
                {message.estado !== "terminado" ? (
                  <button
                    onClick={() => setMostrarModal(message)}
                    className={`bg-${getStatusColor(
                      message.estado
                    )}-500 hover:bg-${getStatusColor(
                      message.estado
                    )}-600 text-white font-bold py-1 px-2 rounded absolute bottom-2 right-10 text-xs`}
                  >
                    Responder
                  </button>
                ) : (
                  <button
                    onClick={() => cambiarEstadoModal(message)}
                    className={`bg-${getStatusColor(
                      message.estado
                    )}-500 hover:bg-${getStatusColor(
                      message.estado
                    )}-600 text-white font-bold py-1 px-2 rounded absolute bottom-2 right-10 text-xs`}
                  >
                    Ver
                  </button>
                )}
                {/* Renderiza el formulario de respuesta dentro del modal */}
                <SendMessageModal
                  handleResponseChange={handleResponseChange}
                  handleResponseSubmit={handleResponseSubmit}
                  responseContent={responseContent}
                  estado={mostrarModal}
                  cambiarEstado={setMostrarModal}
                />
                {/* Renderizacion del modal para ver el mensaje completo */}
                <Modal
                  estado={estadoModal}
                  cambiarEstado={cambiarEstadoModal}
                ></Modal>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Principal;
