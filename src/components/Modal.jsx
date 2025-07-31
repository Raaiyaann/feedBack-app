import classes from "./Modal.module.css";

function Modal(props) { // jadi "props" disini nanti yang menyimpan nilai wrapped content yang di wrapped komponen Modal 
  return <>
  {/* nanti <div/> ini sebagai backdrop saat modalnya muncul begitu 
  =================================================================
    ----> tag <dialog> ini untuk sebagai tag pop up, dan properti "open" 
            untuk memungkinkan tampilkan pop up nya, secara default kalau tidak diberikan nilai itu akan jadi true.
            children itu key objek yang di wrapped yaitu komponen NewPost */}
    <div className={classes.backdrop}/>
    <dialog open className={classes.modal}>{props.children}</dialog> 
</>;
}

export default Modal;