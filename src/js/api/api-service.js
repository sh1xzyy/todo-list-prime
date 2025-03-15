import axios from 'axios';

const MY_API = 'nodes';
const API_LINK = 'https://67d5879cd2c7857431f0aed3.mockapi.io';

// Add new Note
export const addNewNode = userData => {
  return axios
    .post(`${API_LINK}/${MY_API}/`, userData)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.error('Error adding new note:', err);
      throw err;
    });
};

// Get Unique Nodes
export const getUniqueNodes = searchRequest => {
  return axios
    .get(`${API_LINK}/${MY_API}/`, {
      params: {
        title: searchRequest,
      },
    })
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(err => {
      console.error('Error fetching unique nodes:', err);
      throw err;
    });
};

// Get All Nodes
export const getAllNodes = () => {
  return axios
    .get(`${API_LINK}/${MY_API}/`)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(err => {
      console.error('Error fetching all nodes:', err);
      throw err;
    });
};

// Delete Node
export const deleteNode = nodeId => {
  return axios
    .delete(`${API_LINK}/${MY_API}/${nodeId}`)
    .then(response => {
      console.log(`Node with ID ${nodeId} deleted`);
      return response.data;
    })
    .catch(err => {
      console.error(`Error deleting node with ID ${nodeId}:`, err);
      throw err;
    });
};

// Delete All Nodes
export const deleteAllNodes = () => {
  return axios
    .delete(`${API_LINK}/${MY_API}/`)
    .then(response => {
      console.log(`Nodes have been deleted`);
      return response.data;
    })
    .catch(err => {
      console.error(`Error deleting nodes:`, err);
      throw err;
    });
};
