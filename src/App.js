import axios from "axios";
import { useEffect, useState } from "react";

import HideComments from "./components/HideComments";
import ShowComments from "./components/ShowComments";
import Comments from './components/Comments'

import Avatar from './assets/avatar.png'

import { Container } from './styles/App'

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
    <Container>
      <h1>Blob Posts</h1>
      {posts.map(post => (
        <div className="posts" key={post.id}>
          
          <section className="img-user">
            <img src={Avatar} alt="" />
            <p id="p-user">Usuário {post.id}</p>
          </section>

          <section className="title-body">
            <p id="p-title">{post.title}</p>
            <p id="p-body">{post.body}</p>

            <section className="action-buttons">
              <div>
                <button className="button-active-like">
                  <i id="icon-like" class="bi bi-hand-thumbs-up-fill"></i>
                </button>

                <button className="button-active-love">
                  <i id="icon-love" class="bi bi-heart-fill"></i>
                </button> 

                <button className="button-active-love">
                  <i class="bi bi-share"></i>
                </button>   
              </div>    
              {showComments.includes(post.id) ? (
                <HideComments hideComments={hideComments} post={post}/>
              ) : (
                <ShowComments getCommets={getCommets} post={post}/>
              )}   
            </section>
            
          </section>

          
          
          {post.comments && (
            post.comments.map((coment) => (
              <Comments key={coment.id} coment={coment}/>
            ))
          )}
        </div>
      ))}
    </Container>
  );
}

export default App;
