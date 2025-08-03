import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";
function Modal(props) {
  // jadi "props" disini nanti yang menyimpan nilai wrapped content yang di wrapped komponen Modal

  // hook useNavigate ini digunakan untuk navigasi programatik, pindah route
  // melalui kode javascript , tanpa using <Link>, dan juga tidak melakukan refresh halaman.
  // kenapa bukan komponen <Link> bawaan react?, karena disini kita ingin buat logika untuk close modalnya
  const navigate = useNavigate();
 
  function closeModalHandler() {
    navigate("/"); // ini akan mengarahkan ke route utama
    // bisa juga gunakan navigate('..'), yang akan mengarahkan ke path satu level di atasnya.
  }
  return (
    <>
      {/* nanti <div/> ini sebagai backdrop saat modalnya muncul begitu 
  =================================================================
    ----> menggunakan div biasa karena tag <dialog> memiliki default styling browser 
            yang bisa mengganggu positioning custom */}
      <div className={classes.backdrop} onClick={closeModalHandler} />
      <div className={classes.modal}>{props.children}</div>
    </>
  );
}

export default Modal;
