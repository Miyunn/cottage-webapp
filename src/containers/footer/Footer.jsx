import React from "react";
import "./footer.css";
import kandyApiLogo from "../../assets/logowhite.png";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={kandyApiLogo} alt="logo" />
        </div>

        <div className="footer-links_div">
          <h4>Social</h4>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>

        <div className="footer-links_div">
          <h4>Links</h4>
          <p>Agoda</p>
          <p>Airbnb</p>
          <p>Booking.com</p>
          <p>Expedia</p>
          <p>Trip Advisor</p>
        </div>

        <div className="footer-links_div">
          <h4>Get in touch</h4>
          <p>
            43a, Anagarika Dharmapala Mawatha, <br />
            Kandy 20000
          </p>
          <p>
            <a href="tel:+94 76 133 6668">+94 76 133 6668</a>
          </p>
          <p>
            <a href="mailto:kandyapicottage@gmail.com">
              kandyapicottage@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© Kandy Api Cottage. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
