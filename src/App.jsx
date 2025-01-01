import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/HEader";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleToSetBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex w-11/12 mx-auto gap-6">
        <Blogs handleToSetBookmark={handleToSetBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  );
}

export default App;
