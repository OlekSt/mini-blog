import { useState, useEffect } from 'react';
import PostList from './PostList';

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(async() => {
    fetch('http://localhost:8000/posts')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setPosts(data);
        setIsPending(false);
      })
  }, []);

  return ( 
    <div className="home!">
      { isPending && <div>LOADING....</div> }
      {posts && <PostList posts={posts} title="All posts!" />}
    </div>
   );
}
 
export default Home;