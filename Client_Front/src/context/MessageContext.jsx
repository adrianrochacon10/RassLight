import { createContext, useContext, useState } from "react";
import { sendMessageRequest, getMessagesRequest, respondMessageRequest } from "../api/message.js";

const MessageContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export function MessageProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    try {
      const res = await getMessagesRequest();
      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createMessage = async (message) => {
    const res = await sendMessageRequest(message);
    console.log(res);
  };

  const respondMessage = async (messageId, responseContent, destinatario) => {
    try {
      await respondMessageRequest(messageId, responseContent, destinatario);
      // Actualizar los mensajes después de enviar la respuesta
      await getMessages();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MessageContext.Provider
      value={{
        messages,
        createMessage,
        getMessages,  
        respondMessage
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}
