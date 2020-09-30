import React from "react";
import "./home.css";
import ImgHero from "../../assets/ImgHero/Ic_ilustra_Hero.png";

const Home = () => {
  return (
    <div className="flexbox-container-home">
      <div className="center-title">
        <div className="title-home">
          <div className="font-ligth">Bienvenido a tu </div>
          <div className="paragraph">
            <div className="font-semibold"><p> Entrevista Técnica </p></div>
            <div className="font-ligth"><p> en </p></div>
          </div>
          <div className="font-bold wolox-color"> Wolox</div>
        </div>
      </div>
      <div className="img-center">
        <img src={ImgHero} className="img-hero" alt="imgHero" />
      </div>
    </div>
  );
};

export default Home;
