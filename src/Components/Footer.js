import React from "react";
import "./footer.css";
import logo from '../assets/logo.webp'
import message from '../assets/message.webp'
import fphone from '../assets/fphone.svg'
import fwhatsapp from '../assets/fwhatsapp.svg'
import flocation from '../assets/flocation.svg'
import finsta from '../assets/finsta.svg'
import flinkedin from '../assets/flinkedin.svg'
import futube from '../assets/futube.svg'
import ffb from '../assets/ffb.svg'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-first col">
            <img src={logo} alt="" style={{width:"150px",height:"150px"}}/>
            <span style={{marginBottom:"1.5rem"}}>Explore our range of beautiful properties curated for you!</span>
            <span><img src={message} alt="" className="ficon"/>contact@thekarnani.com</span>
            <span><img src={fphone} alt="" className="ficon"/>+44 7895299086</span>
            <span><img src={fwhatsapp} alt="" className="ficon"/>+44 7895299086</span>
            <span><img src={flocation} alt="" className="ficon"/>Househat UK Limited, 124 City Road, London, England, EC1V 2NX.</span>
            <span><img src={flocation} alt="" className="ficon"/>Househat UK Limited, The Oxford Science Park, Robert Robinson Ave, Littlemore, Oxford, OX4 4GP.</span>
        </div>
        <div className="footer-second col">
            <span>Contact Us</span>
            <span>Refer a Friend</span>
            <span>List with us</span>
            <span>Cancellation Policy</span>
            <span>Privacy Policy</span>
            <span>Partner with us</span>
            <span>Careers</span>
            <span>FAQs</span>
            <span>T&C</span>
        </div>
        <div className="footer-third col">
            <span style={{fontWeight:"700",fontSize:"1.25rem"}}>Follow us on</span>
          <ul className="f-ul">
            <li><img src={finsta} alt="" className="ficon"/><a href="https://www.instagram.com/thekarnani/">Instagram</a></li>
            <li><img src={flinkedin} alt="" className="ficon"/><a href="https://www.linkedin.com/company/karnani/">LinkedIn</a></li>
            <li><img src={futube} alt="" className="ficon"/><a href="https://www.youtube.com/@househataccommodations">YouTube</a></li>
            <li><img src={ffb} alt="" className="ficon"/><a href="https://www.facebook.com/thekarnani">Facebook</a></li>
            
          </ul>
        </div>
      </div>
      <div className="footer-head">
        Karnani is a trading name of HOUSEHAT UK LIMITED registered in England
        and Wales No. 12525449. © Karnani 2024
        <br />
        Househat UK Limited is member of{" "}
        <a href="/" style={{color:"#18C5C2"}}> Property Redress Scheme.</a> Househat UK Limited is a member
        of <a href="/" style={{color:"#18C5C2"}}>UKALA</a> with{" "}
        <a href="/" style={{color:"#18C5C2"}}>Client Money Protection (007396).</a>
      </div>
    </div>
  );
}
