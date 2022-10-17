import React from "react";
import "./css/contact.css";
import { BsTelephone } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact" id="Contact">
        <h1 className="CMe">Contact Me</h1>
        <br></br>
        <br></br>
        <div className="Contact-1">
          <h1>Contact</h1>
          <br></br>
          <br></br>
          <p className="coninfo">
            You’ll called for yielding male, so lights Stars abundantly, is
            their.
          </p>
          <br></br>
          <br></br>
          <h1>27,Queen St,Chennai,Tamilnadu</h1> <br></br> <br></br>
          <div className="phone">
            <h1>+91 8754954543</h1>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <h5 className="gmail">NishanthSebastinj24cseb@gmail.com</h5>
        </div>
        <div className="Contact-2">
          <h2>
            Let's grab a coffee and jump on conversation{" "}
            <span>chat with me.</span>
          </h2>
          <form>
            <input type="text" placeholder="Your Name"></input>
            <br></br>
            <br></br>
            <input type="text" placeholder="Your Email"></input>
            <br></br>
            <br></br>

            <textarea placeholder="Message"></textarea>
            <br></br>
            <br></br>
            <button>Contact Me</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
