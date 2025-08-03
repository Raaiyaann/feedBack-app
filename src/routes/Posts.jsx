import PostList from "../components/PostList";
import "./App.css";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <Outlet />
      <PostList />
    </>
  );
}

export default Posts;
