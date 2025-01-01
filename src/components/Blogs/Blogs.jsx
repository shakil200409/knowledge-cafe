import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleToSetBookmark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("../../../public/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          handleToSetBookmark={handleToSetBookmark}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  blog: PropTypes.object,
};

export default Blogs;
