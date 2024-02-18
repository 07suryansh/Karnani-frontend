import React from "react";
import "./about.css";

function AboutCard(props) {
  return (
    <div className="card">
      <div className="card-head">{props.heading}</div>
      <div className="card-info">{props.info}</div>
    </div>
  );
}

export default function About() {
  return (
    <div className="about-page">
      <span className="about-head">Giving You Peace of Mind</span>
      <div className="about-info">
        <AboutCard
          heading={"Prime Locations"}
          info={
            "Our accommodations are strategically positioned across the areas, placing you within a reach of local attractions, vibrant city life, and convenient transportation links. Enjoy the best of each area without compromising on accessibility."
          }
        />
        <AboutCard
          heading={"Tailored Experiences"}
          info={
            "Find the perfect room that suits your needs, whether it's a cozy single space or a spacious en-suite. Our diverse range of accommodation ensures comfort tailored to your preferences."
          }
        />
        <AboutCard
          heading={"Exceptional Amenities"}
          info={
            "Take advantage of modern conveniences such as high-speed Wi-Fi, all incluive bills, entertainment options for relaxation, and dedicated workspaces for your productivity needs."
          }
        />
        <AboutCard
          heading={"Impeccable Service"}
          info={
            "Our attentive staff and proprty manager is available, ready to assist you with personalized recommendations and ensuring a seamless and enjoyable stay from check-in to departure."
          }
        />
        <AboutCard
          heading={"Safety & Security"}
          info={
            "Rest assured with our commitment to your safety. Our accommodations feature modern security systems, including CCTV surveillance, and strict adherence to safety protocols for your peace of mind."
          }
        />
        <AboutCard
          heading={"Affordable Luxury"}
          info={
            "Experience the perfect blend of luxury and affordability. Our accommodations offers premium comfort at competitive rates, allowing you to indulge in a delightful stay without straining your budget."
          }
        />
      </div>
    </div>
  );
}
