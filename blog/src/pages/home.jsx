import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userApi from '../apizes/userApi';  
import postApi from '../apizes/postApi';
import "../styles/home.css";

function Home() {
  const [posts, setPosts] = useState([]); 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const postsResponse = await postApi.get('/posts');
        const usersResponse = await userApi.get('/users');
        setPosts(postsResponse.data);
        setUsers(usersResponse.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
    fetchData();
  }, []);

  const getAuthorName = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : 'Desconhecido';
  };

  return (
    <div className='tudo'>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: '20px' }}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>Autor: {getAuthorName(post.userId)}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;  