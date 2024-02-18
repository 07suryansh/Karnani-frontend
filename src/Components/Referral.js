import React from "react";
import "./referral.css";
import meeting from "../assets/meeting.webp";

export default function Referral() {
  return (
    <div className="referral-page">
      <span className="booking-heading">REFERRAL</span>
      <div className="referral-content">
        <div className="referral-left">
          <div className="big-head">
            Get £50 with minimal effort at all! Earn a reward just by referring
            a friend.
          </div>
          <div className="small-head">
            <p>Convert references into rewards.</p>
            <p>Receive credit following a successful Booking.</p>
          </div>
          <button className="black-btn">Get Started</button>
        </div>
        <div className="referral-right">
          <img src={meeting} alt="" className="meet-pic" />
        </div>
      </div>
    </div>
  );
}
