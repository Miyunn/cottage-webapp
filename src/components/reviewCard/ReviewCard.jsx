import React from "react";
import "./reviewCard.css";

const reviewCard = ({ name, text, date }) => {
  return (
    <div className="reveiws-container__reveiw">
      <div className="reveiws-container__reveiw-text">
        <div className="review-contrainer__review-name">
          <h1>{name}</h1>
        </div>
        <div className="review-contrainer__review-content">
          <p>{text}</p>
        </div>
        <div className="review-contrainer__review-date">
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default reviewCard;
