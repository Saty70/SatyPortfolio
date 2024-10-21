import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../assets/glassPaper.png"

import {Link} from "react-router-dom";
 
const HeroImg = () => {
  return <div className = "hero">
    <div className = "mask">
        <img className = "into-img" src= {IntroImg} alt="IntroImg"/>
    </div>
    <div className = "content">
        <p>hi I'm  a Student</p>
        <h1>Satyam Kumar Prasad</h1>
        <div >
        <Link to = "/project" className = "btn">Projects</Link>
        <Link to = "/contact" className = "btn btn-light">Contact</Link>
    </div> 
    </div>
  </div>
};

export default HeroImg