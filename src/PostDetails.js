import { useParams } from "react-router";
import useFetch from './useFetch';

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isPending, error} = useFetch('http://localhost:8000/posts/' + id);

  return (
    <div className="post-details">
        { error && <div>{ error }</div>}
        { isPending && <div>LOADING....</div> }
        { post && (
          <article>
            <h2>{ post.title }</h2>
            <p>Written by { post.author }</p>
            <div>{ post.body} </div>
          </article>
        )}
    </div>
  );
}
 
export default PostDetails;