import axios from 'axios';

const userApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default userApi;