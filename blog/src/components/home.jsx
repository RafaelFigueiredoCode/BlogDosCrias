import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import postApi from './apizes/postApi.jsx'


function Home(){

const [blog, setBlog] = useState()
const navigate = useNavigate()


useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await postApi.get('/post');
        setBlog(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      }
    };
    fetchBlog();
  }, []);

}
 