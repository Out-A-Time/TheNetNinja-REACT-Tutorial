//type sfc to get Stateless Function Component
import { useState } from "react";
import BlogList from "./BlogList";

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

  const handleDelete = function (id) {
    // const newBlogs = blogs.filter((blog) => blog.id !== id);  as arrow function-FILTER-when true stays, when false is filtered out from the newBlogs
    const newBlogs = blogs.filter(function (blog) {
      if (blog.id !== id) {
        return true;
      }
      return false;
    });
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      {/* Passing Props to BlogList function */}
      <BlogList
        blogsProp={blogs}
        titleProp={"All Posts"}
        handleDeleteProp={handleDelete}
      />
    </div>
  );
};

export default Home;
