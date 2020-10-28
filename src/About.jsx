import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import "./Css/about.css";
import pdf from "./images/DylanThijs_CV.pdf";

function About() {
  return (
    <div className="App">
    <Navbar />
      <div className="container">
        <div className="about-content">

          <div className="about">

            <h1 className="kopje">Over mij</h1>

            <p>Mijn naam is Dylan Thijs, ik ben 26 jaar en ik woon in Utrecht. 
            Op dit moment studeer ik Open-ICT aan de Hogeschool Utrecht. Daarvoor heb ik 
            Interactive Media Design gestudeerd aan het Grafisch Lyceum Rotterdam. Naast mijn 
            opleiding werk ik ook bij de Mediamarkt als verkoopmedewerker. 
            Na mijn opleiding wil ik graag verder met programeren maar weet ik nog niet zeker 
            welke richting. Hier hoop ik tijdens mijn opleiding achter te komen.
            </p>

            <h1 className="kopje">Wat kan ik allemaal</h1>

            <p>Tijdens mijn MBO opleiding op het Grafisch Lyceum heb ik verschillende ontwerptechnieken 
            en codeertalen geleerd. Hierbij kan je denken aan grafisch ontwerpen. Bijvoorbeeld Logo ontwerp, 
            concept design, animatie en 3d design. Daarnaast heb ik ook gewerkt met HTML/CSS en Javascript. 
            Deze skills heb ik tijdens mijn stage ook verder kunnen ontwikkelen tot een goed niveau.
            Hierdoor ken ik de basis en kan ik goed werken met verschillende programma's. 
            Hierbij kunt u denken aan het Adobe pakket bijvoorbeeld Photoshop, Indesign en After effects.
            Daarnaast kan ik ook om gaan met Visual studio code en andere tekstverwerkings programma's
            </p>
            <p>
            Hieronder kunt u mijn cv downloaden voor meer informatie.
            </p>

          </div>
          
          <div className="images">

              <img src="https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg?cs=srgb&dl=pexels-vlada-karpovich-4050312.jpg&fm=jpg" alt="Mijn werkplek" className="images-item-top"/>
              <img src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?cs=srgb&dl=pexels-elvis-2528118.jpg&fm=jpg" alt="Mijn werkplek" className="images-item-bottom"/>
          
          </div>

          <div className="cv">
            <a href={pdf} target="_blank"><button type="button" className="cvbutton">Download CV</button></a>
          </div>


        </div>  
      </div> 
    </div>
  );
}

export default About;
