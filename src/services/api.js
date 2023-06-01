import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';


export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      return response;
    } else {
      throw new Error('Request failed with status code ' + response.status);
    }
  } catch (error) {
    throw new Error('Error fetching posts: ' + error.message);
  }
};