import axios from "axios";
const api = axios.create();
api.defaults.headers["ngrok-skip-browser-warning"] = 1234;

export const postApiCall = async (url, body) => {
  return await api.post(url, body);
};

export const putApiCall = async (url, body) => {
  return await api.put(url, body);
};

export const deleteApiCall = async (url) => {
  return await api.delete(url);
};

export const getApiCall = async (url) => {
  return await api.get(url);
};
