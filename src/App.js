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
              <button>
                <p>Curtir</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                </svg>
              </button>

              <button>
                <p>Comentar</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
                  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                </svg>
              </button>          
            </section>
          </section>

          
          {showComments.includes(post.id) ? (
            <HideComments hideComments={hideComments} post={post}/>
          ) : (
            <ShowComments getCommets={getCommets} post={post}/>
          )}
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
