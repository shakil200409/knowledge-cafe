import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleToSetBookmark, handleReadingTimes }) => {
  const {
    cover,
    title,
    author_img,
    author,
    publish_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="my-10 border-b">
      <img
        className="rounded-lg md:rounded-xl mt-4"
        src={cover}
        alt={`Thumbnail of ${title}`}
      />
      {/* Author & Reading part */}
      <div className="flex items-center justify-between my-5">
        <div className="flex gap-4 md:gap-6">
          <img
            className="w-10 h-10 md:w-14 md:h-14 object-cover rounded-full"
            src={author_img}
            alt={`Profile of ${author}`}
          />
          <div>
            <h4 className="text-lg md:text-xl font-bold">{author}</h4>
            <p className="text-sm md:text-base text-gray-400">{publish_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-base md:text-lg font-medium">
            {reading_time} min read
          </p>
          <button onClick={() => handleToSetBookmark(blog)}>
            <FaRegBookmark />
          </button>
        </div>
      </div>
      {/* Blog title */}
      <h3 className="text-2xl md:text-4xl font-bold">{title}</h3>

      {/* Hashtags */}
      <p className="my-3">
        {hashtags.map((hash, index) => (
          <span className="mr-2 text-gray-400" key={index}>
            <a href="#">{hash}</a>
          </span>
        ))}
      </p>

      {/* Mark as read */}
      <button
        onClick={() => handleReadingTimes(reading_time)}
        className="mb-5 text-purple-700 text-lg font-semibold"
      >
        Mark as Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleToSetBookmark: PropTypes.func.isRequired,
  handleReadingTimes: PropTypes.func.isRequired,
};
export default Blog;
