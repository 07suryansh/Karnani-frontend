import React from "react";
import "./citycover.css";
import london from "../assets/london.webp";
import birmingham from "../assets/birmingham.webp";
import conventry from "../assets/conventry.webp";
import nottingham from "../assets/nottingham.webp";
import leicester from "../assets/leicester.webp";
import manchester from "../assets/manchester.webp";
import sheffield from "../assets/sheffield.webp";
import leeds from "../assets/leeds.webp";
import cardiff from "../assets/cardiff.webp";

function ImgCard(props) {
  return (
    <div className={props.styles}>
      <img src={props.image} alt="" className={props.imgStyle} />
      <button className={props.btnStyle}>{props.name}</button>
    </div>
  );
}

export default function CityCover() {
  return (
    <div className="city-cover-page">
      <span className="city-page-head">TOP CITIES WE COVER</span>
      <div className="city-container">
        <div className="first-row rows">
          <ImgCard
            image={london}
            name={"London"}
            styles={"city-images"}
            imgStyle={"imgs"}
            btnStyle={"city-name"}
          />
          <ImgCard
            image={birmingham}
            name={"Birmingham"}
            styles={"city-images"}
            imgStyle={"imgs"}
            btnStyle={"city-name"}
          />
        </div>
        <div className="second-row rows">
          <ImgCard
            image={conventry}
            name={"Conventry"}
            styles={"city-images"}
            imgStyle={"imgs"}
            btnStyle={"city-name"}
          />
          <ImgCard
            image={nottingham}
            name={"Nottingham"}
            styles={"city-images"}
            imgStyle={"imgs"}
            btnStyle={"city-name"}
          />
          <ImgCard
            image={leicester}
            name={"Leicester"}
            styles={"city-images"}
            imgStyle={"imgs"}
            btnStyle={"city-name"}
          />
        </div>
        <div className="third-row rows">
          <ImgCard
            image={manchester}
            name={"Manchester"}
            styles={"city-images"}
            imgStyle={"imgs"}
            btnStyle={"city-name"}
          />
          <ImgCard
            image={sheffield}
            name={"Sheffield"}
            styles={"city-images"}
            imgStyle={"imgs"}
            btnStyle={"city-name"}
          />
        </div>
        <div className="fourth-row rows">
          <ImgCard
            image={leeds}
            name={"Leeds"}
            styles={"city-images"}
            imgStyle={"imgs"}
            btnStyle={"city-name"}
          />
          <ImgCard
            image={cardiff}
            name={"Cardiff"}
            styles={"city-images"}
            imgStyle={"imgs"}
            btnStyle={"city-name"}
          />
        </div>
      </div>
      <button className="city-btn btn" style={{padding:"14px 30px"}}>EXPLORE MORE</button>
    </div>
  );
}
