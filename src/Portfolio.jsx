import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import "./components/thumbnail.css";
import Thumbnail from "./components/Thumbnail";

function Portfolio() {
  return (
    <div className="App">
    <Navbar />
    <div className="container">
      <div className="portfolio-content">
        <Thumbnail
          link=""
          image="http://via.placeholder.com/800x600/C72B41/800834"
          title="Test titel"
          category="Dit is een korte beschrijving van het project"
        />

        <Thumbnail
          link=""
          image="http://via.placeholder.com/800x600/C72B41/800834"
          title="Test titel"
          category="Dit is een korte beschrijving van het project"
        />

        <Thumbnail
          link=""
          image="http://via.placeholder.com/800x600/C72B41/800834"
          title="Test titel"
          category="Dit is een korte beschrijving van het project"
        />

        <Thumbnail
          link=""
          image="http://via.placeholder.com/800x600/C72B41/800834"
          title="Test titel"
          category="Dit is een korte beschrijving van het project"
        />

        <Thumbnail
        link=""
        image="http://via.placeholder.com/800x600/C72B41/800834"
        title="Test titel"
        category="Dit is een korte beschrijving van het project"
        />

        <Thumbnail
        link=""
        image="http://via.placeholder.com/800x600/C72B41/800834"
        title="Test titel"
        category="Dit is een korte beschrijving van het project"
        />

      </div>
    </div>
  </div>
  );
}

export default Portfolio;