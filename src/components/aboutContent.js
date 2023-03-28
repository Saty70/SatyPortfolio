import "./aboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import react1 from "../assets/wpap1.jpg";
import react2 from "../assets/wpap2.jpg";

const aboutContent = () => {
  return <div className="about">
    <div className="left">
        <h1>Who am I ?</h1>
        <p>jenga Lover🥰</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
    </div>
    <div className = "right">
        <div className="img-container">
            <div className="img-Stack top">
                <img src={react1} className="img" alt="true" />
            </div>
            <div className="img-Stack bottom">
                <img src={react2} className="img" alt="true" />
            </div>
        </div>
    </div>
  </div>
};

export default aboutContent