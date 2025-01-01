import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/HEader";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTimes, setReadingTimes] = useState(0);

  const handleToSetBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleReadingTimes = (time) => {
    setReadingTimes(readingTimes + time);
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex w-11/12 mx-auto gap-6">
        <Blogs
          handleReadingTimes={handleReadingTimes}
          handleToSetBookmark={handleToSetBookmark}
        ></Blogs>
        <Bookmarks
          readingTimes={readingTimes}
          bookmarks={bookmarks}
        ></Bookmarks>
      </main>
    </>
  );
}

export default App;
