import React from "react";
import Navbar from "./components/Navbar/Navbar"
import "./App.css";
import "./Css/contact.css";

function Contact() {
  return (
    <div className="App">
    <Navbar />
      <div className="container">
        <div className="contact-content">
          <div className="contact">
          <h1 className="kopje">Contactgegevens</h1>
          <p>
            Via deze pagina kunt u contact met mij opnemen. Heeft u vragen of wilt u graag wat
            meer informatie over mij of over mijn projecten? Vul dan het contact formulier en ik
            zal u zo spoedig mogelijk een reactie terug sturen.
          </p>
          </div>
         <div className="formcont"> 
          <div className="formulier">
            <form>
              <div className="group">
                <input type="text" required></input>
                <span className="hightlight"></span>
                <label>Naam</label>
              </div>

              <div className="group">
              <input type="text" required></input>
              <span className="hightlight"></span>
              <label>E-mail</label>
              </div>

              <div className="group">
              <input type="text" required></input>
              <span className="hightlight"></span>
              <label>Telefoon</label>
              </div>

              <div className="group">
              <textarea type="text" required></textarea>
              <span className="hightlight"></span>
              <label>Bericht</label>
              </div>

              <button type="button" className="contactbutton">Verstuur</button>

            </form>
          </div>
        </div>
        </div> 

      </div>
    </div>
  );
}

export default Contact;