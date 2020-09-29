import React from "react";
import WolloxLogo from "../../assets/logo_full_color.svg";
import "./logo.css";

const Logo = ({ width }) => {
  return <img src={WolloxLogo} alt="Wolox Logo" style={{width: width}} className="img-animation"/>;
};

export default Logo;
