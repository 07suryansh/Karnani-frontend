import React from "react";
import "./specialoffer.css";
import calculator from "../assets/calculator.webp";
import giftcard from "../assets/giftcard.webp";
import beds from "../assets/beds.webp";
import university from "../assets/university.webp";
import cities from "../assets/cities.webp";

export default function SpecialOffers() {
  return (
    <div className="special-offer-page">
      <h2>SPECIAL OFFERS</h2>
      <div className="info-cards">
        <div className="info-card">
          <img src={calculator} alt="" className="info-card-icon" />
          <div className="info-card-content">
            <span>Karnani Exclusive Offer</span>
            <span>Book through us and get £50 as cashback*</span>
          </div>
        </div>
        <div className="info-card">
          <img src={giftcard} alt="" className="info-card-icon giftcard" />
          <div className="info-card-content">
            <span>£100 Amazon Voucher</span>
            <span>
              For every person who books through your referral, you get a £100
              Amazon gift voucher*
            </span>
          </div>
        </div>
      </div>
      <div className="add-info">
        <div className="add-info-card">
          <img src={beds} alt="" className="add-info-icon" />
          <span className="add-info-head">10,000 + Beds</span>
          <span className="add-info-info">
            Choose from an extensive range of options and book the one that
            suits you the best.
          </span>
        </div>
        <div className="add-info-card">
          <img src={university} alt="" className="add-info-icon" />
          <span className="add-info-head">500 + Universities</span>
          <span className="add-info-info">
            Explore the top student and professional housing options close to
            city centre and prestigious universities.
          </span>
        </div>
        <div className="add-info-card">
          <img src={cities} alt="" className="add-info-icon" />
          <span className="add-info-head">50 + Cities</span>
          <span className="add-info-info">
            We serve many big cities all across the UK and Australia.
          </span>
        </div>
      </div>
    </div>
  );
}
