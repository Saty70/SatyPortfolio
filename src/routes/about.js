import React from 'react'

import Navbar from "../components/Navbar";  
import Footer from "../components/footer";  
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/aboutContent";

const about = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading = "About" text="I am Satyam "/>
    <AboutContent />
    <Footer/>
    </div>
  )
}

export default about