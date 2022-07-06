import { useState } from "react";

const CreateBlog = function () {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("wario");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = function (event) {
    event.preventDefault(); //prevents page being refreshed when submit
    const blog = { title, body, author };

    setIsLoading(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST", //type of request
      headers: { "Content-Type": "application/json" }, //Content type that is being sent
      body: JSON.stringify(blog), //actual data that is being sent converted from an object into JSON. JSON-server will add ID automatically.
    }).then(function () {
      console.log("new blog added");
      setIsLoading(false);
    });
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
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button>Adding Blog...</button>}
        <p>{author}</p>
      </form>
    </div>
  );
};

export default CreateBlog;
