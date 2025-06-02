import axios from 'axios';

const userapi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default userapi;
