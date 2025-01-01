import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/HEader";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleToSetBookmark = (blog) => {
    console.log("Bookmark will be added soon.", blog);
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex w-11/12 mx-auto">
        <Blogs handleToSetBookmark={handleToSetBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  );
}

export default App;
