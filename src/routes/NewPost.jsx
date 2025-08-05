import classes from "./NewPost.module.css";

import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";
function NewPost() {
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

  return (
    // wrapped content itu maksudnya adalah komponen NewPost ini akan di wrap oleh komponen Modal
    <Modal>
      {/* Form di bawah ini merupakan bawaan react router dom */}
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3}></textarea>
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <div className={classes.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          {/* secara default button itu akan bertindak menjadi submit*/}
          <button>Submit</button>
        </div>
      </Form>
    </Modal>
  );
}

export default NewPost;
export async function action(data) {
  // objek 'data' berisi informasi tentang permintaan http (request, params, context)
  const formData = await data.request.formData(); // ini mengembalikan promise, makanya pake await.
  // data di atas akan diubah menjadi objek FormData biasa, bukan objek javascript (yang key nya itu otomatis diambil dari name yaitu body dan author form diatas).
  const postData = Object.fromEntries(formData); // diubah ke bentuk objek js {body: '...', author:'...'}
  // bisa juga jadi:
  /*
    const postData = {
    body: formData.get("body"),
    author: formData.get("author"),
    }
    */
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/"); // ini akan mengembalikan ke endpoint awal saat di submit datanya
}
