import { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');

  return ( 
    <div className="create">
      <h2>Add a New Post</h2>
      <form>
        <label>Post title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Post body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Post author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="ashley">ashley</option>
          <option value="luigi">luigi</option>luigi
        </select>
        <button>Add Post</button>
        <p>{ title }</p>
        <p>{ body }</p>
        <p>{ author }</p>
      </form>
    </div>
   );
}
 
export default Create;