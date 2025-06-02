import axios from 'axios';

const postApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts'
});

export default postApi