import axios from "./axios.js";

export const getMessagesRequest = () => axios.get(`/getMessages`)
export const sendMessageRequest = message => axios.post(`/sendMessage`, message);
export const respondMessageRequest = (messageId, responseContent, destinatario) => axios.post(`/sendResponse`, { messageId, responseContent,destinatario });
export const updateStatusRequest = (messageId) => axios.post(`/updateStatus`, {messageId})