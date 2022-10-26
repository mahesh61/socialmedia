import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navContainer">
        <div className="logo">AllineBookings.com</div>
        <di> Products</di>
        <div>contact</div>
        <div>Aboit us</div>
        <div className="navbar-items">
          <button className="navButton"> Register</button>
          <button className="navButton"> Login</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
