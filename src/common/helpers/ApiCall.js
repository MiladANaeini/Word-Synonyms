import axios from "axios";

export const postApiCall = async (url, body) => {
  return await axios.post(url, body);
};

export const putApiCall = async (url, body) => {
  return await axios.put(url, body);
};

export const deleteApiCall = async (url) => {
  return await axios.delete(url);
};

export const getApiCall = async (url) => {
  return await axios.get(url);
};
