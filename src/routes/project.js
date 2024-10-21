import React from 'react'
//https://youtu.be/0h2b4ftbZcU?t=7181
import Navbar from "../components/Navbar";  
import Footer from "../components/footer"; 
import HeroImg2 from "../components/HeroImg2"; 
import Work from '../components/Work';
//import PricingCard from '../components/PricingCard';
const project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Projects." text="Some of my recent works"/>
      <Work />

      <Footer/>
    </div>
  )
}
      // <PricingCard /> ---at 12 th after heroImg2
export default project