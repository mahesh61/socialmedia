import React from "react";
import "./Mail.css";

export default function Mail() {
  return (
    <div className="mail">
      <h1 className="mailtittle">Save time, save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Mail" className="mailInput" />
        <button className="mailBtn">Subscribe</button>
      </div>
    </div>
  );
}
