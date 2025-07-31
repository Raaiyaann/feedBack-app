import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler() {
    
    setModalIsVisible(false); // setModalIsVisible ini bertindak sebagai state updater function 
  }
  function showModalHandler() {
    setModalIsVisible(true);
  }
  return (
    <>
    <MainHeader onCreatePost = {showModalHandler}/>
    <main>
      <PostList isPosting = {modalIsVisible} onStopPosting = {hideModalHandler}/>
    </main>
    </>
  );
}

export default App;
