import classes from "./NewPost.module.css";
import { useState } from "react";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
function NewPost(props) {
  // $$$ const [useEnteredBody, setEnteredBody] = useState('') // useState itu SELALU mengembalikan array  dengan 2 elemen
  /* sebenarnya bisa juga dibawah seperti ini, cuman tidak praktis:
  --> const stateArray = useState(''); 
  --> const useEnteredBody = setArray[0]; = state saat ini
  --> const setEnteredBody= setArray[1];  = variabel yang menyimpan elemen kedua dari array useState() akan selalu menjadi fungsi 
   ========================================================================
   --> berarti nilai setEnteredBody itu diambil dari elemen kedua nilai array pada useState <--
   --> untuk useState('') yang ada kutipnya itu itu artinya akan mengembalikan tipe array <--
   ====================================== penting ===========================================
  ### jadi setEnteredBody itu nanti akan mengembalikan sebuah nilai saat dijalankan dan disimpan pada elemen index 0, 
  sehingga saat terjadi pengetikan pada textArea dan even nya terpicu, maka nilai tadi akan disimpan pada variabel
  "useEnteredBody" dan bisa ditampilkan pada tag <p> yang dibuat dibawah
  */
  // parameter pertama itu menyimpan nilai yang nanti ingin ditampilkan, dan parameter kedua itu sebenarnya sebuah fungsi untuk mengubah nilai

  //  newPost ini nanti digunakan untuk membuat postingan baru (ini disebut state )
  // $$$function changeBodyHandler(event) { // sebenarnya "event" sebagai objek   menyimpan banyak sekali nilai
  // //  dari event yang digunakan, seperti target yang dituju untuk event ini element apa, type nya apa dan masih banyak lagi
  //   setEnteredBody(event.target.value); // ini nanti akan mengubah nilai dari "useEnteredBody" dan merender ulang untuk
  //   // menampilkan tampilan nilai barunya
  // }

  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault(); //  secara default itu saat form di submit maka akan reload halaman, itu di prevent
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    props.onAddPost(postData);
    props.onCancel(); // key onCancel dalam objek props komponen NewPost ini bisa digunakan sebagai fungsi
  }
  return (
    // wrapped content itu maksudnya adalah komponen NewPost ini akan di wrap oleh komponen Modal
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            required
            rows={3}
            onChange={bodyChangeHandler} // nama propsnya bebas
          ></textarea>
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <div className={classes.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          {/* secara default button itu akan bertindak menjadi submit*/}
          <button>Submit</button>
        </div>
      </form>
    </Modal>
  );
}

export default NewPost;
