import React from "react";
import logo from "../assets/logo.webp";
import "./introduction.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

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
            <FaPhoneAlt
              className="intro-icon"
              style={{ width: "20px", height: "20px" }}
            />
            <FaWhatsapp
              className="intro-icon"
              style={{ width: "25px", height: "25px" }}
            />
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
