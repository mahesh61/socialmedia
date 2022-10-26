import React from "react";
import "./Featured.css";
function Featured() {
  return (
    <div className="featured">
      <div className="ferauredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/square250/684653.webp?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTittles">
          <h1 className="tittle">Hyderabad </h1>
          <span className="tittle">795 properties </span>
        </div>
      </div>
      <div className="ferauredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTittles">
          <h1 className="tittle">Mumbai</h1>
          <span className="tittle">17633 properties</span>
        </div>
      </div>
      <div className="ferauredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTittles">
          <h1 className="tittle">Goa</h1>
          <span className="tittle">7618 properties</span>
        </div>
      </div>
      <div className="ferauredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/square250/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTittles">
          <h1 className="tittle">Delhi</h1>
          <span className="tittle">8276 properties</span>
        </div>
      </div>
    </div>
  );
}

export default Featured;
