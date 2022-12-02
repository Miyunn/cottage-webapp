import React, { useEffect } from "react";
import Feature from "../../components/feature/Feature";
import "./intro.css";
import Aos from "aos";
import "aos/dist/aos.css";
import bath from "../../assets/bath.svg";
import sofa from "../../assets/sofa.svg";
import bed from "../../assets/bed.svg";

const Intro = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="intro section__margin" id="about">
      <div className="intro-heading">
        <h1 className="gradient__text" data-aos="fade-right">
          A Cottage Where Modern Meets Tradition in an Ancident City
        </h1>
        <a href="#gallery" data-aos="fade-left" data-aos-offset="500">
          <p>Explore our Gallery</p>
        </a>
      </div>

      <div className="intro-container" data-aos="fade-up" data-aos-offset="500">
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
