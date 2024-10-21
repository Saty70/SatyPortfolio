import React from 'react'

import Navbar from "../components/Navbar";  
import Footer from "../components/footer";  
import HeroImg2 from '../components/HeroImg2';
import Form from "../components/Form"; 

const contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading = "Contacts" text = "hi@mailme.com  "/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default contact