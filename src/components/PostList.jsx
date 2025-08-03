import Post from "./Post";
import classes from "./PostList.module.css";
import { useState, useEffect } from "react";

function PostList() {
  const [posts, setPost] = useState([]);
  const [isFetching, setIsFetching] = useState(false); // untu buat kondisi loading saat membutuhkan waktu untuk ambil datanya
  useEffect(() => {
    async function fetchPost() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const responseData = await response.json();
      setPost(responseData.posts); // "posts" disini itu merupakan key dari objek dibuat dari backend nya, bukan dari useState
      setIsFetching(false);
    }
    fetchPost();
  }, []);
  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      // fetch data dari backend
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPost((existingPosts) => [postData, ...existingPosts]);
  }

  // postContent
  let postContent = isFetching ? (
    <div className={classes.loading}>
      <h2>Loading posts ...</h2>
    </div>
  ) : posts.length > 0 ? (
    <ul className={classes.Post}>
      {posts.map((post) => (
        <Post key={post.body} author={post.author} body={post.body} /> // "key" ini properti bawaan react
      ))}
    </ul>
  ) : (
    <div className={classes.noPost}>
      <h2>There Is No Post Of FeedBack yet</h2>
      <p>Please add Some!</p>
    </div>
  );

  return (
    <div className={classes.container}>
      {/* 
        Saat ini postingan masih dibuat secara hardcoded di dalam komponen <Post />.
        Nantinya, daftar postingan ini sebaiknya diambil dari state
        agar lebih dinamis dan bisa diperbarui berdasarkan input dari <NewPost />.
       ===========================================================================
       onBodyChange ini properti yang di buat pada komponen newPost
       ================================================================================
       -->catatan PENTINGGG: untuk dibawah itu yang "onBodyChange = {bodyChangeHandler}" sebenarnya key dengan value.
       nah nanti itu disimpan di dalam sebuah objek yang ada pada parameter komponen "NewPost".
       nah makanya jika event "onChange" itu dijalankan kan harusnya mengaktifkan fungsi "bodyChangeHandler", tapi di aktifkan
       lewat objek seperti "props.onBodyChange" (INTINYA PROPS ITU KOMPONEN PARENT MENGIRIM DATA KE CHILD KOMPONEN)<--
      */}

      {/* komponen juga bisa bungkus komponen lain seperti "modal" dibawah yang nanti disebut penggunaan dengan children props 
          =====================================================================================================================
                                 dibawah merupakan penggunaan conditional rendering (pake ternary operator lebih readable )
        {posts.length > 0 && (
        <ul className={classes.Post}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} /> // "key" ini properti bawaan react
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div className={classes.noPost}>
          <h2>There Is No Post Of FeedBack yet</h2>
          <p>Please add Some!</p>
        </div>
      )}*/}
      {postContent}
    </div>
  );
}

export default PostList;
