import React from "react";
import Feature from "../../components/feature/Feature";
import "./intro.css";

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
        {/* <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments" /> */}
      </div>
    </div>
  );
};

export default Intro;
