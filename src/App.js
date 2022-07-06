import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateBlog from "./CreateBlog";
import BlogDetails from "./BlogDetails";

// App.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:8000"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
//   next();
// });

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Switch component make sure that only one route shows at a time */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create" element={<CreateBlog />}></Route>
            <Route path="/blogs/:id" element={<BlogDetails />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
