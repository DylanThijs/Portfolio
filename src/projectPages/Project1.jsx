import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "../App.css";
import "../Css/Info.css";
import magus1 from "../images/magus1.png";
import magus2 from "../images/magus2.png";

function Project1() {
  return (
    <div className="App">
    <Navbar />
        <div className="container">
          <div className="info-content">
            <div className="informatie">
              <h1 className="kopje">Vooronderzoek</h1>
              <p>Voordat ik ben begonnen met het maken van een eigen website ben ik begonnen met het 
              onderzoeken van de markt. Welke andere websites zijn er en wie zijn de concurrenten?
              Daarnaast kijken we ook naar de doelgroep. Wie willen we bereiken en waarom? 
              Daarnaast werd er besloten welke kleuren we gingen gebruiken.
              Met de antwoorden op deze vraag kon ik beginnen aan de wireframes en het ontwerp van de website.
              Hier wordt er vooral gekeken naar andere ontwerpen en hoe wie hier onze eigen stijl aan kunnen geven.
              Toen we eenmaal tevreden waren met het ontwerp konden we beginnen met het bouwen van de website.
              </p>
              <h1 className="kopje">Het project</h1>
              <p>De website zelf is gemaakt met Wordpress waarvoor we een thema gebruikt hebben en aangepast. 
              Het thema was optimizable en deze is dan ook helemaal aangepast om zo onze ontwerpen te kunnen realiseren.
              Uiteindelijk zijn we alle teksten gaan schrijven voor op de website en hebben we passende afbeeldingen 
              uitgezocht om zo de website vorm te geven. Over het eindresultaat zijn we zeker tevreden en hebben we ons 
              gehouden aan het ontwerp wat bij het vooronderzoek past.
              </p>
            </div>
            <div className="images">
              <img src={magus1} alt="Mijn werkplek" className="images-item-top"/>
              <img src={magus2} alt="Mijn werkplek" className="images-item-bottom"/>
            </div>

            <div className="cv">
              <a href="https://magusmedia.nl/" target="_blank"><button type="button" className="cvbutton">Bekijk website</button></a>
            </div>

          </div>
        </div>
    </div>
  );
}

export default Project1;