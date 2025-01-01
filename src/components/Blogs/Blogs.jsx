import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleToSetBookmark, handleReadingTimes }) => {
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
          handleReadingTimes={handleReadingTimes}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleToSetBookmark: PropTypes.func,
  handleReadingTimes: PropTypes.func,
};

export default Blogs;
