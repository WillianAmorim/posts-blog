import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [showComments, setshowComments] = useState([]);

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

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h1>Post: {post.id}</h1>
          <h2>Usuário {post.id}</h2>
          <h2>{post.title}</h2>
          <h3>{post.body}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
