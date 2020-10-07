import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "../App.css";
import "../Css/Info.css";

function Project1() {
  return (
    <div className="App">
    <Navbar />
        <div className="container">
          <div className="info-content">
            <div className="informatie">
              <h1 className="kopje">Vooronderzoek</h1>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <h1 className="kopje">Het project</h1>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
            <div className="images">
              <img src="https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg?cs=srgb&dl=pexels-vlada-karpovich-4050312.jpg&fm=jpg" alt="Mijn werkplek" className="images-item-top"/>
              <img src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?cs=srgb&dl=pexels-elvis-2528118.jpg&fm=jpg" alt="Mijn werkplek" className="images-item-bottom"/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Project1;