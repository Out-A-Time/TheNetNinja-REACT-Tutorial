import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const handleDelete = function () {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE", //type of request
    }).then(function () {
      console.log("blog has been deleted");
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
