// import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, changemode] = useState("Light");
 
  const togglemode = () => {
    if (mode === "Light") {
      changemode("Dark");
      // document.body.style.backgroundColor = " #d1d4d9";
      document.body.style.backgroundColor = "#c6c9ce";
    
    } else {
      changemode("Light");
      document.body.style.backgroundColor = "#30343a";
    }
  };
  return (
    <>
      <Navbar
        title="Textify"
        about="AboutUS"
        mode={mode}
        togglemode={togglemode}
      />
     
      <div className="container mt-4" id="mainbody">
        <Textform mode={mode} />
        {/* <About mode={mode}/> */}
      </div>
    </>
  );
}
export default App;
