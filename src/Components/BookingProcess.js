import React from "react";
import "./bookingprocess.css";
import search from "../assets/search.webp";
import paperwork from "../assets/paperwork.webp";
import home from "../assets/home.webp";

function BookingCard(props) {
  return (
    <div className="booking-card">
      <img src={props.img} alt="" className="booking-img" />
      <div className="booking-head">{props.head}</div>
      <div className="booking-info">{props.info}</div>
      <button className="nums">{props.num}</button>
    </div>
  );
}

export default function BookingProcess() {
  return (
    <div className="booking-process-page">
      <span className="booking-heading">BOOKING PROCESS</span>
      <div className="booking-content">
        <BookingCard
          img={search}
          head={"Search and Finalise"}
          info={"Choose from several verified Premium housing listings."}
          num={"1"}
        />
        <BookingCard 
          img={paperwork}
          head={"Smooth Automated Paperwork"}
          info={"Don’t stress out on too many documents, we have your back!"}
          num={"2"}
        />
        <BookingCard 
          img={home}
          head={"YOUR BOOKING IS CONFIRMED"}
          info={`Pack your bag and Let's MOVE to your new life`}
          num={"3"}
        />
      </div>
    </div>
  );
}
