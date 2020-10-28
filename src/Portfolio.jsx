import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import "./components/thumbnail.css";
import Thumbnail from "./components/Thumbnail";
import image from "./images/Magusmain.png";
import image1 from "./images/heuchmer.png";
import image2 from "./images/Sabrosa.png";

function Portfolio() {
  return (
    <div className="App">
    <Navbar />
    <div className="container">
      <div className="portfolio-content">
        <Thumbnail
          link="/project1"
          image={image}
          title="Magus Media"
          category="Magus Media is een website die samen met een vriend is gemaakt. 
          Deze website hebben we gemaakt omdat we samen een bedrijf wouden starten"
        />

        <Thumbnail
          link="/project1"
          image={image1}
          title="Heuchemer Kappers"
          category="Onder de naam Magus Media heb ik meegewerkt aan een website voor een kapper"
        />

        <Thumbnail
          link="/project1"
          image={image2}
          title="Sabrosa"
          category="Voor mijn broer heb ik in mijn vrije tijd een website gemaakt voor zijn eigen bedrijf"
        />

      </div>
    </div>
  </div>
  );
}

export default Portfolio;