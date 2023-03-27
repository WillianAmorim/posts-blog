import axios from "axios";
import { useEffect, useState } from "react";

import HideComments from "./components/HideComments";
import ShowComments from "./components/ShowComments";
import Comments from './components/Comments'

function App() {
  const [posts, setPosts] = useState([]);
  const [showComments, setShowComments] = useState([]);

  //Fazendo uso do useEffect para que a função requisitionGetPosts seja chamada quando a página carregar
  useEffect(() => {
    //utilizando a função requisitionGetPosts pois a função UseEffect não aceita async
    const requisitionGetPosts = async () => {
      const { data: allPosts } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(allPosts);
    };

    requisitionGetPosts();
  }, []);

  const getCommets = async (id) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const newPosts = posts.map((post) =>
      post.id === id ? { ...post, comments: data } : post
    );
    setShowComments([...showComments, id]);
    setPosts(newPosts);
  };

  const hideComments = (id) => {
    const newPosts = posts.map((post) =>
      post.id === id ? { ...post, comments: null } : post
    );
    setShowComments(showComments.filter((postId) => postId !== id));
    setPosts(newPosts);

  };

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h1>Post: {post.id}</h1>
          <h2>Usuário {post.id}</h2>
          <h2>{post.title}</h2>
          <h3>{post.body}</h3>
          {showComments.includes(post.id) ? (
            <HideComments hideComments={hideComments} post={post}/>
          ) : (
            <ShowComments getCommets={getCommets} post={post}/>
          )}
          {post.comments ? (
            post.comments.map((coment) => (
              <Comments key={coment.id} coment={coment}/>
            ))
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
