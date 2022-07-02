import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = function () {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

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
