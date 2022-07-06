import { useState } from "react";

const CreateBlog = function () {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("wario");

  const handleSubmit = function (event) {
    event.preventDefault(); //prevents page being refreshed when submit
    const blog = { title, body, author };
    console.log(blog);
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={function (event) {
            return setTitle(event.target.value);
          }}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={function (event) {
            return setBody(event.target.value);
          }}
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={function (event) {
            return setAuthor(event.target.value);
          }}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default CreateBlog;
