import React from "react";
import "./App.css";
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return ( 
   <div className="container">
    <div className="home-content">
      <div className="intro">
      <motion.h1 className="welkom"
        initial={{opacity:0, x: '-100vw'}}
        animate={{opacity:1, x:0}}
        transition={{delay: 0.1 ,duration:3, type:'spring', stiffness:150}}
      >
        Welkom</motion.h1>
      <motion.h2
        initial={{opacity:0, x: '-100vw'}}
        animate={{opacity:1, x:0}}
        transition={{duration: 3}}
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
              transition={{delay: 2.5, duration: 3}}
            >
            About</motion.li>
          </Link>
          <Link to ="/portfolio">
            <motion.li
              initial={{opacity:0, y: '100vh', rotate: 90}}
              animate={{opacity:1, y:0, rotate:0}}
              transition={{delay: 2.75, duration: 3}}
            >
            Portfolio</motion.li>
          </Link>
          <Link to ="/contact">
            <motion.li
              initial={{opacity:0, y: '100vh', rotate: 90}}
              animate={{opacity:1, y:0, rotate:0}}
              transition={{delay: 3, duration: 3}}
            >
            Contact</motion.li>
          </Link>

        </ul>
      </div>
      <div className="socialshome">
            <motion.h2
              initial={{opacity:0, x: '-100vw'}}
              animate={{opacity:1, x:0}}
              transition={{delay: 1 ,duration: 3}}
            >
            Social Media</motion.h2>
            <a href="https://www.linkedin.com/in/dylan-thijs-668451109/" target="_blank" rel="noopener noreferrer">
              <motion.i className="fab fa-linkedin"
                initial={{opacity:0, x: '-100vw'}}
                animate={{opacity:1, x:0}}
                transition={{delay: 2 ,duration: 3}}
              >
              </motion.i>
            </a>

            <a href="https://www.facebook.com/Sliertt" target="_blank" rel="noopener noreferrer">
              <motion.i className="fab fa-facebook-square"
                initial={{opacity:0, x: '-100vw'}}
                animate={{opacity:1, x:0}}
                transition={{delay: 1.75 ,duration: 3}}
              >
              </motion.i>
            </a>
            <a href="https://twitter.com/Sliertt" target="_blank" rel="noopener noreferrer">
              <motion.i className="fab fa-twitter-square"
                initial={{opacity:0, x: '-100vw'}}
                animate={{opacity:1, x:0}}
                transition={{delay: 1.5 ,duration: 3}}
              >
              </motion.i>
            </a>

      </div>
     </div>
    </div> 
  );
}

export default Home;
