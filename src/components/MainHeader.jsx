import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        FeedBack App
      </h1>
      <p>
        {/* Link ini berguna untuk  mengarah ke halaman untuk membuat postingan baru 
        tanpa refresh halaman, properti "to"
        untuk membawa kita ke halaman lain.
        sebenarnya Link ini merender html <a>, cuman bedanya tidak refresh halaman saat di pencet*/}
        <Link to="/create-post" className={classes.button}>
          <MdPostAdd size={20} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
