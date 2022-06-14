const BlogList = function ({ blogsProp, titleProp, handleDeleteProp }) {
  //   const blogs = props.blogsProp; - before destructurizing
  //   const title = props.titleProp; - before destructurizing

  return (
    <div className="blog-list">
      <h2>{titleProp}</h2>
      {blogsProp.map(function (blog) {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <button
              onClick={function () {
                handleDeleteProp(blog.id);
              }}
            >
              Delete Blog
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
