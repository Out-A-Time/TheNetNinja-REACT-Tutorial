//type sfc to get Stateless Function Component
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = function () {
  //useState - HOOK
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // const handleDelete = function (id) {
  //   // const newBlogs = blogs.filter((blog) => blog.id !== id);  as arrow function-FILTER-when true stays, when false is filtered out from the newBlogs. Doesn't mutate original array.
  //   const newBlogs = blogs.filter(function (blog) {
  //     if (blog.id !== id) {
  //       return true;
  //     }
  //     return false;
  //   });
  //   setBlogs(newBlogs);
  // };

  //useEffect - HOOK - run with EVERY render.
  //add empty 'dependency array' as second argument to avoid infinite loop -> USECASE: when we want to run function one time during first render

  useEffect(function () {
    fetch("http://localhost:8000/blogs")
      .then(function (res) {
        if (!res.ok) {
          throw Error("Yo! We could not fetch the data for that resource");
        }
        return res.json();
      })
      .then(function (data) {
        setBlogs(data);
        setIsLoading(false);
        setError(null);
      })
      //catching the network error
      .catch(function (err) {
        setIsLoading(false);
        setError(err.message);
      });
    console.log("use effect ran");
  }, []);

  return (
    <div className="home">
      {/* condition templating output in React. Logical && evaluate left side first (if it false then won't do right side). At the beginning blogs is null, thus won't create an error. */}
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogsProp={blogs} titleProp={"All Posts"} />}
    </div>
  );
};

export default Home;

//To run the JSON Server open second terminal and run
//command "npx json-server --watch data/db.json --port8000"
//or type 'npm run server' as command has been added into package.json
