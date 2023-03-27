import axios from "axios";
import { useEffect } from "react";

function App() {
  //Fazendo uso do useEffect para que a função requisitionGetPosts seja chamada quando a página carregar
  useEffect(() => {
    //utilizando a função requisitionGetPosts pois a função UseEffect não aceita async
    const requisitionGetPosts = async () => {
      const { data: allPosts } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
    };

    requisitionGetPosts();
  }, []);

  return (
    <>
    </>
  );
}

export default App;
