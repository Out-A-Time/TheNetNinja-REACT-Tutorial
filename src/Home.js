//type sfc to get Stateless Function Component
import { useState } from "react";

const Home = function () {
  //useState - HOOK
  const [blogs, setBlogs] = useState([
    {
      title: "My new website in React",
      body: "loremIpsum...",
      author: "Mario",
      id: 1,
    },
    {
      title: "Hello from UpsideDown",
      body: "loremIpsum...",
      author: "Luigi",
      id: 2,
    },
    {
      title: "Learning React is fun",
      body: "loremIpsum...",
      author: "Wario",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {blogs.map(function (blog) {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
