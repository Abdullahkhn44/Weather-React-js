import React from "react";
import "../Components/Logo.css";



function Logo() {
  return (
    <>
      <nav className="nav-container">
        <img className="logo" src={require("../Assets/Images/logo.png")} alt="weather logo" />
      </nav>
    </>
  );
}
export default Logo;
