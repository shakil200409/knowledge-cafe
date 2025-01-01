import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 p-7 bg-gray-100 mt-5 rounded-lg md:rounded-xl">
      <h4 className="text-2xl font-bold">
        Bookmarked Blogs : {bookmarks.length}
      </h4>
      <div>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};

export default Bookmarks;
