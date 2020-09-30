import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="flexbox-container-footer">
      <div className="title-footer-bold font-semibold">
        Gracias por <span className="color-blue">completar el ejercicio</span>
      </div>
      <div className="title-footer">Te invitamos a ver mas informacion</div>
      <div className="btn-content font-bold">
        <a href="https://www.wolox.com.ar/" className="button-footer">
          Conocer más
        </a>
      </div>
      <div className="title-footer-text font-semibold">W O L O X</div>
    </div>
  );
};

export default Footer;
