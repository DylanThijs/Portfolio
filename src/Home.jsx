import React from "react";
import Navbar from "./components/Navbar/Navbar"
import "./App.css";

function Home() {
  return (
   <div className="container">
    <div className="home-content">
      <div className="intro">
      <h1 className="welkom">Hello there</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      </div>
      <div className="mainmenu">
        <ul className="mainitems">
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
     </div>
    </div> 
  );
}

export default Home;
