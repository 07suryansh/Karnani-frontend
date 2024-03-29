import React from "react";
import logo from "../assets/logo.webp";
import "./introduction.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import fphone from '../assets/fphone.svg'
import fwhatsapp from '../assets/fwhatsapp.svg'

export default function Introduction() {
  return (
    <div className="introduction-page">
      <div className="introduction-nav">
        <div className="nav-left">
          <img src={logo} alt="" className="company-logo" />
        </div>
        <div className="nav-right">
          <button className="nav-btn btn">Get in touch !</button>
          <div className="intro-icons">
          <img src={fphone} alt="" className="intro-icon"/>
          <img src={fwhatsapp} alt="" className="intro-icon"/>
          </div>
        </div>
      </div>
      <div className="intro-heading">
        <div className="intro-top">
          <span className="heading-text">Let's Plan Your Next Move</span>
          <IoIosSend className="heading-icon" />
        </div>
        <div className="sub-head">
          <h3>Explore our range of beautiful properties curated for you!</h3>
        </div>
        <button className="head-btn">Explore Now</button>
      </div>
    </div>
  );
}
