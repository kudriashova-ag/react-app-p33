import { Outlet, ScrollRestoration } from "react-router";
import "./App.css";
import Header from "./components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./features/postsSlice";

function App() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (posts.loading) return "Loading...";
  if (posts.error) return posts.error;
  
  return (
    <>
      <ScrollRestoration />
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <footer>Footer</footer>
    </>
  );
}

export default App;
