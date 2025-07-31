import classes from "./Post.module.css"; // classes ini sebuah objek yang digunakan untuk mengambil selector css nya

// sebenarnya komponen itu seperti kumpulan fungsi saja
function Post(props) {
  // props nanti sebagai objek menyimpan nilai yang diberikan saat diberikan nilai pada komponennya di app.jsx
  return (
    // kalau mau berikan kelas itu di react harus pake "className", karena ini seperti html versi js
    // tapi ini bisa menimbulkan konsekunesi saat projeknya kompleks dan bisa clash ke komponen lain jika
    // menggunakan file css global.

    // kalau style nya menggunakan tanda hubung, nama classnya itu bungkus dengan " [" "] " .
    // kalau hanya 1 kata, jadi "classes.(namaClass)"
    <li className={classes["container-postingan"]}>
      <p className={classes.author}>{props.author}</p> 
      <p className={classes.body}>{props.body}</p>
    </li>
  );
} // kalau bisa nama komponennya itu menggunakan capital untuk huruf awal
// karena untuk di import itu harus menggunakan huruf capital, tidak bisa lowercase
// kalau lowercase huruf awak, nanti react bacanya sebagai default element tag html.
//jadi kalau post, react akan cari tag <post> yang sebenarnya tidak ada di html.

export default Post;

//catatan: sebenarnya props itu objek yang menyimpan nilai key dan value yang sudah di definisikan pada postList saat dipanggil.
//          nah untuk menampilkan maka kita harus akses value dari key tersebut itu kita panggil lewat objek props seperti di atas.