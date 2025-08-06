import { useLoaderData, Link } from "react-router-dom";

import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;
export async function loader(data) {
  // ini konsepnya sama fungsi loader juga bisa tampung objek seperti di function action() pada NewPost.jsx
  const response = await fetch(
    "http://localhost:8080/posts/" + data.params.postId
  ); // params itu key dari objek data, karena path di panggilan komponen PostDetail
  // dalam main.jsx itu ':/id', maka paramas.id, jika misal ':/postId', jadi params.postId
  const resData = await response.json();
  return resData.post; // karena di objek yang di ambil dari path fetch di atas itu dari backend merupakan 'post'
}
