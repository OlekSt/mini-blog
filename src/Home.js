import { useState, useEffect } from 'react';
import PostList from './PostList';

const Home = () => {
  const [posts, setPosts] = useState(null);
  
  useEffect(async() => {
    fetch('http://localhost:8000/posts')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setPosts(data);
      })
  }, []);

  return ( 
    <div className="home!">
      {posts && <PostList posts={posts} title="All posts!" />}
    </div>
   );
}
 
export default Home;