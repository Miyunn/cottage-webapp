import React from "react";
import Feature from "../../components/feature/Feature";
import "./intro.css";
import bath from "../../assets/bath.svg";
import sofa from "../../assets/sofa.svg";
import bed from "../../assets/bed.svg";

const Intro = () => {
  return (
    <div className="intro section__margin" id="wgpt3">
      <div className="intro-heading">
        <h1 className="gradient__text">
          A Cottage Where Modern Meets Tradition in an Ancident City
        </h1>
        <a href="#gallery">
          <p>Explore our Gallery</p>
        </a>
      </div>

      <div className="intro-container">
        <Feature
          title="Living Room"
          text="Airconditioned, Satalite TV and Free WiFi avaiable"
          icon={sofa}
        />
        <Feature
          title="3 Bedrooms"
          text="Airconditioned, 2 rooms equiped with queen size beds"
          icon={bed}
        />
        <Feature title="2 Bathrooms" text="With hotwater" icon={bath} />{" "}
      </div>
    </div>
  );
};

export default Intro;
