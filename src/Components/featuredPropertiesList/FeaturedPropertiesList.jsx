import React from "react";
import "./FeaturedPropertiesList.css";

function FeaturedPropertiesList() {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/square200/7991034.webp?k=4062095557add5d446a79887fd3f8d8fd7aacd4f411d1f9b09b63c959d606dcf&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Appartement le Méridien</span>
        <span className="fpcity">Paris</span>
        <span className="fpPrice">Starting from ₹ 54,975</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/square200/64768782.webp?k=6ce8b6ac08f2b54a21b93b7b3416dc0fd8d6b1f4ca409e5ff0819ba07181eb36&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Zoku Amsterdam</span>
        <span className="fpcity">Amsterdam</span>
        <span className="fpPrice">Starting from ₹ 12,774</span>
        <div className="fpRating">
          <button>9.2</button>
          <span>Fabulous</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/square200/85257658.webp?k=3b753fffd29f020beb8747f674ce7e721496577dc3e73dc6fb03f97edb86d701&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Leman Locke</span>
        <span className="fpcity">London</span>
        <span className="fpPrice">Starting from ₹ 18,881</span>
        <div className="fpRating">
          <button>9.0</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/square200/344283828.webp?k=1fc76b2efee9496d2cccf35ad4ae0f8895197a7ddfb3162d932aa368de980fab&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Browns Central </span>
        <span className="fpcity">New York</span>
        <span className="fpPrice"> Starting from ₹ 19.000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPropertiesList;
