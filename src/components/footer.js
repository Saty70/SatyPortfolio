import "./footerStyles.css"

import React from 'react'
import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom";

import {FaHome, /*FaPhoneAlt,*/ FaMailBulk, FaGithub, FaInstagram, FaExternalLinkAlt} from "react-icons/fa";
import {FaStackOverflow, FaTwitter, FaTwitch, FaLinkedinIn, FaFacebookF, FaSpotify} from "react-icons/fa";
const footer = () => {
  return (
    <div calssName = "footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={30} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Outer Ring Rd, near JAIPUR GOLDEN HOSPITAL, Institutional Area, Sector 3, Rohini, Delhi, 110085</p>
                        <p>INDIA</p>
                    </div>
                </div>
                {/*<div className = "phone">
                    <h4><FaPhoneAlt size={20} style={{color:"#fff", marginRight: "2rem"}}/>000-9999-999</h4>
                </div>*/}
                <div className = "email">
                    <p><FaMailBulk size={30} style={{color:"#fff", marginRight: "1rem"}}/><Link to = "/contact"><b><u>Contact</u></b></Link></p>
                </div>
            </div>
            <div className="right">
                <h4>
                    About
                </h4>
                <p>Currently, I am a student at the National Forensics Sciences University, pursuing my Bachelor of Technology degree in Computer Science.</p>
                <div className="social">
                <NavLink to = "https://www.linkedin.com/in/satyam-kumar-prasad-b53ba9242/">
                    <FaLinkedinIn size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                </NavLink>


                <NavLink to = "https://github.com/Saty70">
                    <FaGithub size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                </NavLink>
                

                <NavLink to = "https://www.instagram.com/saty.ikp/">
                    <FaInstagram size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                </NavLink>

                <NavLink to = "https://www.facebook.com/profile.php?id=61550265533020&mibextid=b06tZ0">
                    <FaFacebookF size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                </NavLink>

                <NavLink to = "https://stackoverflow.com/users/17837709/satyam-kumar-prasad">
                    <FaStackOverflow size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                </NavLink>

                <NavLink to = "https://twitter.com/Saty_ikp">
                    <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                </NavLink>
                
                <NavLink to = "https://www.twitch.tv/saty_10">
                    <FaTwitch size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                </NavLink>

                <NavLink to = "https://open.spotify.com/user/317r2ag4ftz5upb5vo6x4i76hph4?si=e09dd1c8b5014ea5">
                    <FaSpotify size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                </NavLink>

                <NavLink to = "https://saty.vercel.app">
                    <FaExternalLinkAlt size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                </NavLink>
                
                </div>
            </div>
        </div>
    </div> 
  )
}

export default footer