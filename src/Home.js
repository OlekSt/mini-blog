import { useState, useEffect } from 'react';
import PostList from './PostList';

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null)

  useEffect(async() => {
    fetch('http://localhost:8000/posts')
      .then(res => {
        if(!res.ok){
          throw Error('could not fetch data for this resource');
        }
        return res.json()
      })
      .then(data => {
        setPosts(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      })
  }, []);

  return ( 
    <div className="home!">
      { error && <div>{ error }</div>}
      { isPending && <div>LOADING....</div> }
      {posts && <PostList posts={posts} title="All posts!" />}
    </div>
   );
}
 
export default Home;