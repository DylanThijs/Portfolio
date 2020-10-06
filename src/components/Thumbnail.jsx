import React from "react";
import { Link } from 'react-router-dom';
import "./thumbnail.css"

function Thumbnail(props) {
    return (
      <div className="project">
        <Link to={props.link}>
          <div className="project-image">
            <img src={props.image} alt="Project Image"/>
            <div className="image-overlay">
                <div className="project-title">{props.title}</div>
                <div className="project-category">{props.category}</div>
          </div>
        </div>
        </Link>
      </div>
    );
  }
   
  export default Thumbnail;