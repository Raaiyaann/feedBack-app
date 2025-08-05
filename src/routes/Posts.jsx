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

export async function loader() { // ini nanti di assign pada properti loader dalam main.jsx
  const response = await fetch("http://localhost:8080/posts");
  const responseData = await response.json();
  return responseData.posts; // key posts ini dari backend
}
