import React from "react";
import "./technologies.css";
import ImgTechnologies from "../../assets/Ic_Tecnologys.svg";

const Technologies = () => {
  return (
    <div className="flexbox-container">
      <div className="center-title">
        <div className="title">
          <p>Estamos buscando </p>
          <p>para incoporar gente</p>
          <p> increíble para estas </p>
          <p> tecnologías: </p>
        </div>
      </div>
      <div className="img-center">
        <img src={ImgTechnologies} alt="icTechnologies"/>
      </div>
    </div>
  );
};

export default Technologies;