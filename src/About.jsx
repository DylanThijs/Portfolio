import React from "react";
import Navbar from "./components/Navbar/Navbar"
import "./App.css";
import "./Css/about.css";

function About() {
  return (
    <div className="App">
    <Navbar />
      <div className="container">
        <div className="about-content">

          <div className="about">

            <h1 className="kopje">Over mij</h1>

            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>

            <h1 className="kopje">Wat kan ik allemaal</h1>

            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </p>

          </div>
          
          <div className="images">

              <img src="https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg?cs=srgb&dl=pexels-vlada-karpovich-4050312.jpg&fm=jpg" alt="Mijn werkplek" className="images-item-top"/>
              <img src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?cs=srgb&dl=pexels-elvis-2528118.jpg&fm=jpg" alt="Mijn werkplek" className="images-item-bottom"/>
          
          </div>

          <div className="cv">
            <button type="button" className="cvbutton">Download CV</button>
          </div>

        </div>  
      </div> 
    </div>
  );
}

export default About;
