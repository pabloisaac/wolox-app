import React from "react";
import "./index.css";
import ImgHero from "../../assets/ImgHero/Ic_ilustra_Hero.png";

const Home = () => {
  return (
    <div className="flexbox-container-home">
      <div className="center-title">
        <div className="title-home">
          <p>Bienvenido a tu </p>
          <p>
            <b>Entrevista Técnica</b> en
          </p>
          <p className="wolox-color"> Wolox</p>
        </div>
      </div>
      <div className="img-center">
        <img src={ImgHero} className="img-hero"/>
      </div>
    </div>
  );
};

export default Home;
