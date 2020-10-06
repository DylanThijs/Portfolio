import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return ( 
<div className="App">
  <div className="home-nav">
    <Navbar />
  </div>

   <div className="container">
    <div className="home-content">
      <div className="intro">
      <motion.h1 className="welkom"
      >
        Welkom</motion.h1>
      <motion.h2
      >
        Mijn naam is Dylan Thijs en ik ben een ICT-professional van de toekomst.
        Op deze website kunt u mijn projecten zien, meer informatie over mij of kunt u contact met mij opnemen. Tot snel?</motion.h2>
      </div>
      <div className="mainmenu">
        <ul className="mainitems">
          <Link to ="/about">
            <motion.li
              initial={{opacity:0, y: '100vh', rotate: 90}}
              animate={{opacity:1, y:0, rotate:0}}
              transition={{delay: 0.2, duration: 3}}
            >
            About</motion.li>
          </Link>
          <Link to ="/portfolio">
            <motion.li
              initial={{opacity:0, y: '100vh', rotate: 90}}
              animate={{opacity:1, y:0, rotate:0}}
              transition={{delay: 0.4 , duration: 3}}
            >
            Portfolio</motion.li>
          </Link>
          <Link to ="/contact">
            <motion.li
              initial={{opacity:0, y: '100vh', rotate: 90}}
              animate={{opacity:1, y:0, rotate:0}}
              transition={{delay: 0.6, duration: 3}}
            >
            Contact</motion.li>
          </Link>

        </ul>
      </div>
      <div className="socialshome">
            <motion.h2
            >
            Social Media</motion.h2>
            <a href="https://www.linkedin.com/in/dylan-thijs-668451109/" target="_blank" rel="noopener noreferrer">
              <motion.i className="fab fa-linkedin"
              >
              </motion.i>
            </a>

            <a href="https://www.facebook.com/Sliertt" target="_blank" rel="noopener noreferrer">
              <motion.i className="fab fa-facebook-square"
              >
              </motion.i>
            </a>
            <a href="https://twitter.com/Sliertt" target="_blank" rel="noopener noreferrer">
              <motion.i className="fab fa-twitter-square"
              >
              </motion.i>
            </a>

      </div>
     </div>
    </div> 
    </div>
  );
}

export default Home;
