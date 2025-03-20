import axios from 'axios';

axios.defaults.baseURL = 'https://67d5879cd2c7857431f0aed3.mockapi.io/nodes/';

// Get All Nodes
export const getAllNodes = async () => {
  try {
    const response = await axios.get('');
    return response.data;
  } catch (error) {
    console.log('Something went wrong with downloading nodes!');
    throw error;
  }
};

// Add new Note
export const addNewNode = async userData => {
  try {
    const response = await axios.post('', userData);
    return response.data;
  } catch (error) {
    console.log('Something went wrong with adding node!');
    throw error;
  }
};

// Get Unique Nodes
export const getUniqueNodes = async searchRequest => {
  try {
    const response = await axios.get('', { params: { title: searchRequest } });
    return response.data;
  } catch (error) {
    console.log('Something went wrong with searching nodes!');
    throw error;
  }
};

// Delete Node
export const deleteNode = async nodeId => {
  try {
    const response = await axios.delete(`${nodeId}`);
    console.log(`Deleted node ${nodeId}`);
    return response.data;
  } catch (error) {
    console.log(`Something went wrong with deleting node!`);
    throw error;
  }
};
