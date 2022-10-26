import React from "react";
import "./SearchItems.css";

function SearchItems() {
  return (
    <div className="serchItem">
      <img
        src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="searchImg"
      />
      <div className="serchItemDesc">
        <h1 className="serachTittl">Hotel Bliss</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOpt">Free Taxi to Airport</span>
        <span className="siSubtittle">Deluxe Room</span>
        <span className="siFeatures">1 extra-large double bed</span>
        <span className="siCancelOpt">FREE cancellation</span>
        <span className="siCancelOptTittle"> No prepayment needed</span>
      </div>
      <div className="serchDetail">
        <div className="sDetailRating">
          <span>Excellent</span>
          <button>8.7</button>
        </div>
        <div className="sDetailTexts">
          <span className="siPrice">₹ 81,000</span>
          <span className="siTaxOp">Including taxes and fees</span>
          <button className="siCheckAvailabity">See Availability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchItems;
