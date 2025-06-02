import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userApi from './apizes/userApi';

function ListaPosts() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const postsRes = await userApi.get('/posts');
      const usersRes = await userApi.get('/users');
      setPosts(postsRes.data);
      setUsers(usersRes.data);
    }
    fetchData();
  }, []);

  const getAuthorName = (userId) => {
    const user = users.find(u => u.id === userId);
    return user ? user.name : 'Desconhecido';
  };

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
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

export default ListaPosts;
