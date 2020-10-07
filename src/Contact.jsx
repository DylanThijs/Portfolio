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
          <div className="formulier">
            <form>
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
            </form>
          </div>
        </div> 

      </div>
    </div>
  );
}

export default Contact;