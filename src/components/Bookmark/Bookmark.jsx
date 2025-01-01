import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-white p-5 rounded-lg my-5">
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
