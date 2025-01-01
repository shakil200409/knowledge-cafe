import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  console.log(blog);
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
    <div>
      <img
        className="rounded-lg mt-4"
        src={cover}
        alt={`Thumbnail of ${title}`}
      />
      {/* Author & REading part */}
      <div className="flex items-center justify-between my-3">
        <div className="flex gap-4 md:gap-6">
          <img
            className="w-10 h-10 md:w-14 md:h-14 object-cover rounded-full"
            src={author_img}
            alt={`Profile of ${author}`}
          />
          <div>
            <h4 className="text-lg md:text-xl font-bold">{author}</h4>
          </div>
        </div>
        <div>
          <p className="text-base md:text-lg font-medium">
            {reading_time} min read
          </p>
        </div>
      </div>
      <h3 className="text-2xl md:text-4xl font-bold">{title}</h3>

      {/* Hashtags */}
      <p className="my-2">
        {hashtags.map((hash, index) => (
          <span className="mr-2 text-gray-400" key={index}>
            <a href="#">{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
