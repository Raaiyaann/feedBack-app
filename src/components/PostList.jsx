import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

function PostList(props) {
  const [posts, setPost] = useState([]);
  function addPostHandler(postData) {
    setPost((existingPosts) => [postData, ...existingPosts]);
  }

  let modalContent = null; // ini secara default mengmbalikan undefined kalau tidak diberikan nilai
  if (props.isPosting) {
    modalContent = (
      <Modal onClose={props.onStopPosting}>
        <NewPost onCancel={props.onStopPosting} onAddPost={addPostHandler} />
      </Modal>
    );
  } //  btw kode jsx bisa di store pada variabel javascript.

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

      {/* komponen juga bisa bungkus komponen lain seperti "modal" dibawah yang nanti disebut penggunaan dengan children props */}
      {modalContent}
      <ul className={classes.Post}>
        {posts.map((post) => <Post author={post.author} body={post.body}/>)}
        </ul>
    </div>
  );
}

export default PostList;
