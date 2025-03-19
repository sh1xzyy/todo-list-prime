import axios from 'axios';

axios.defaults.baseURL = "https://67d5879cd2c7857431f0aed3.mockapi.io"

// Get All Nodes
export const getAllNodes = async () => {
  return await axios.get("")
};

// Add new Note
export const addNewNode = async userData => {
  return await axios.post("", userData)
};

// Get Unique Nodes
export const getUniqueNodes = async searchRequest => {
  return await axios.get("", { params: { title: searchRequest }})
};  

// Delete Node
export const deleteNode = async nodeId => {
  return await axios.delete(`${nodeId}`)
};

// Delete All Nodes
 export const deleteAllNodes = async () => {
  return await axios.delete("", {params: { all: true }})
};
