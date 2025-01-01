import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTimes }) => {
  return (
    <section className="md:w-1/3 ">
      {/* Total Reading time */}
      <div className="border-2 border-purple-700 rounded-xl p-5 bg-purple-100 mt-10">
        <h3 className="text-2xl font-bold text-purple-700">
          Spent time on read : {readingTimes} min
        </h3>
      </div>
      {/* Bookmarks */}
      <div className="bg-gray-100 p-7 mt-5 rounded-lg md:rounded-xl">
        <h4 className="text-2xl font-bold">
          Bookmarked Blogs : {bookmarks.length}
        </h4>
        <div>
          {bookmarks.map((bookmark) => (
            <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
          ))}
        </div>
      </div>
    </section>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTimes: PropTypes.number,
};

export default Bookmarks;
