import React from "react";
import "./contact.css";

const Contact = () => (
  <div className="form" id="contact">
    <h2>Contact Us</h2>
    <div className="form-container">
      <form action="submit">
        <label for="name">Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
          required
        ></input>

        <label for="email">Email</label>
        <input
          type="email"
          id="mail"
          name="mail"
          placeholder="Your email"
          required
        ></input>

        <label for="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="What are you contacting us about.."
          required
        ></input>

        <label for="message">Message</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Tell us more.."
          required
        ></textarea>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  </div>
);

export default Contact;
