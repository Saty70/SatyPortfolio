import "./footerStyles.css"

import React from 'react'

import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";

const footer = () => {
  return (
    <div calssName = "footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Outer Ring Rd, near JAIPUR GOLDEN HOSPITAL, Institutional Area, Sector 3, Rohini, Delhi, 110085</p>
                        <p>INDIA</p>
                    </div>
                </div>
                <div className = "phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>000-9999-999</h4>
                </div>
                <div className = "email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>hi@mailme.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>
                    About
                </h4>
                <p>To fulfill the acute shortage of Forensic Experts in the Country and the World.To make the World a Better and Safer place to live.To carry out Research in the area of Forensic Science, Crime Investigation, Security, Behavioral Science and Criminology. NFSU Mission Education through Investigation
To impart High-Quality Education of International Standards To carry out research in the area of Foren­sic Sci­ence, Crime Investigation, Security,Behavioral Sci­ence and Criminology</p>
                <div className="social">
                <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                <FaGithub size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                <FaInstagram size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default footer