import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Post from "./routes/Posts.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // routerProvider ini merupakan komponen bawaan
import NewPost from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";

const route = createBrowserRouter([
  // createBrowserRouter ini fungsi untuk buat endpoint dan taruh komponen yang ditampilkan
  {
    path: "/",
    element: <RootLayout />, // ini artinya semua route dalam children akan ditampilkan pada RootLayout
    children: [
      // children key ini mengambil nilai array
      {
        path: "/",
        element: <Post />,
        children: [{ path: "/create-post", element: <NewPost /> }], // ini artinya route /create-post akan di render pada komponen NewPost
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* router diabwah merupakan properti bawaan komponen RouterProvider */}
    <RouterProvider router={route} />
  </StrictMode>
);
