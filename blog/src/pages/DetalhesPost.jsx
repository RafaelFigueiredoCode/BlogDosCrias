import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import userApi from '../apizes/userApi';
import postApi from '../apizes/postApi';

function DetalhesPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const postRes = await userApi.get(`/posts/${id}`);
      setPost(postRes.data);

      const userRes = await userApi.get(`/users/${postRes.data.userId}`);
      setAuthor(userRes.data);
    }

    fetchData();
  }, [id]);

  if (!post || !author) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <hr />
      <p><strong>Autor:</strong> {author.name}</p>
      <p><strong>Email:</strong> {author.email}</p>
    </div>
  );
}

export default DetalhesPost;