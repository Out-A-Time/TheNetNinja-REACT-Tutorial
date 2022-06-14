//type sfc to get Stateless Function Component
import { useState, useEffect } from "react";
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

  const [name, setName] = useState("Mario");

  const handleDelete = function (id) {
    // const newBlogs = blogs.filter((blog) => blog.id !== id);  as arrow function-FILTER-when true stays, when false is filtered out from the newBlogs. Doesn't mutate original array.
    const newBlogs = blogs.filter(function (blog) {
      if (blog.id !== id) {
        return true;
      }
      return false;
    });
    setBlogs(newBlogs);
  };

  //useEffect - HOOK - run with EVERY render.
  //add empty 'dependency array' as second argument to avoid infinite loop -> USECASE: when we want to run function one time during first render
  useEffect(function () {
    console.log("use effect ran");
  }, []);

  return (
    <div className="home">
      {/* Passing Props to BlogList function */}
      <BlogList
        blogsProp={blogs}
        titleProp={"All Posts"}
        handleDeleteProp={handleDelete}
      />
      <button
        onClick={function () {
          setName("Luigi");
        }}
      >
        Change Name
      </button>{" "}
      <p>{name}</p>
      <BlogList
        blogsProp={blogs.filter(function (blog) {
          if (blog.author === "Mario") {
            return true;
          }
          return false;
        })}
        titleProp={"Mario's Posts"}
        handleDeleteProp={handleDelete}
      />
    </div>
  );
};

export default Home;
