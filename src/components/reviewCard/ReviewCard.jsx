import React from "react";
import "./reviewCard.css";

const reviewCard = ({ name, text, date }) => {
  return (
    <div className="reviewCard">
      <div className="reviewCard__name">
        <h1>{name}</h1>
      </div>
      <div className="reviewCard__text">
        <p>{text}</p>
        <div className="reviewCard__text-date">
          <p> - {date}</p>
        </div>
      </div>
    </div>
  );
};

export default reviewCard;
