import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

export const fetchPosts = async () => {
  return await axios.get(`posts`);
};

export const fetchComments = async () => {
  return await axios.get(`comments`);
};

export const fetchUser = async (userId) => {
  return await axios.get(`users/${userId}`);
};

export const fetchUserPosts = async (id) => {
  return await axios.get(`posts?userId=${id}`);
};