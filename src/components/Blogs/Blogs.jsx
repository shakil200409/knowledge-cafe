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
    <div className="md:w-2/3">
      <h2 className="text-3xl">Blogs {blogs.length}</h2>
      {blogs.map((blog) => console.log(blog))}
    </div>
  );
};

export default Blogs;
