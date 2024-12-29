import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("../../../public/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <p>Hello, {blogs.length}</p>
      {blogs.map((blog) => console.log(blog))}
    </div>
  );
};

export default Blogs;