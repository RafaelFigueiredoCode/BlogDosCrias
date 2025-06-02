import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import userApi from '../apizes/userApi';
import postApi from '../apizes/postApi';
import "../styles/detalhesPost.css";

function DetalhesPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const postRes = await postApi.get(`/posts/${id}`);
      setPost(postRes.data);

      const userRes = await userApi.get(`/users/${postRes.data.userId}`);
      setAuthor(userRes.data);
    }

    fetchData();
  }, [id]);

  if (!post || !author) return <p>Carregando...</p>;

  return (
    <div className="detalhe-container">
      <h2 className="detalhe-title">{post.title}</h2>
      <p className="detalhe-body">{post.body}</p>
      <hr />
      <p className="detalhe-author">Escrito por: {author.name}</p>
    </div>
  );
}

export default DetalhesPost;
