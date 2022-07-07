import { Link } from "react-router-dom";

const NotFound = function () {
  return (
    <div className="not-found">
      <h2>Error 404</h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to main page</Link>
    </div>
  );
};

export default NotFound;
