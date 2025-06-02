import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getPosts = () => api.get('/posts');
export const getUsers = () => api.get('/users');
export const getPostById = (id) => api.get(`/posts/${id}`);
export const getUserById = (id) => api.get(`/users/${id}`);
