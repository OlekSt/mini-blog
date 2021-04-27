import { useState } from 'react';
import PostList from './PostList';

const Home = () => {
  const [posts, setPosts] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])
  
  return ( 
    <div className="home!">
      <PostList posts={posts} title="All posts!"/>
      <PostList posts={posts.filter((post) => post.author === 'mario')} title="Mario's posts!"/>
    </div>
   );
}
 
export default Home;