import React from "react";
import "./index.css";
import IcHour from "../../assets/Ic_Hour.svg";
import IcHomeOffice from "../../assets/Ic_HomeOffice.svg";
import IcWorkshops from "../../assets/Ic_Workshops.svg";
import IcDrinkSnacks from "../../assets/Ic_DrinkSnacks.svg";
import IcLaptop from "../../assets/Ic_laptop.svg";
import IcBrain from "../../assets/Ic_brain.svg";

const Benefits = () => {
  return (
    <div className="container-benefits">
      <div className="title-benefits">
        <p>
          {"Entre los beneficios que ofrecemos se encuentran"}{" "}
          <span className="blue-color">{";)"}</span>
        </p>
      </div>
      <div className="benefits-container">
        <div className="benefits-details">
          <div className="icon-center">
            <img src={IcHour} className="img-animation-benefits" />
          </div>
          <div className="title-center">
            <p>Flexibilidad</p>
            <p>Horaria</p>
          </div>
        </div>
        <div className="benefits-details">
          <div className="icon-center">
            <img src={IcHomeOffice} className="img-animation-benefits" />
          </div>
          <div className="title-center">
            <p>Home Office</p>
          </div>
        </div>
        <div className="benefits-details">
          <div className="icon-center">
            <img src={IcWorkshops} className="img-animation-benefits" />
          </div>
          <div className="title-center">
            <p>Capacitaciones</p>
            <p>y workshops</p>
          </div>
        </div>
        <div className="benefits-details">
          <div className="icon-center">
            <img src={IcDrinkSnacks} className="img-animation-benefits" />
          </div>
          <div className="title-center">
            <p>Snacks, frutas</p>
            <p>y bebidas gratis</p>
          </div>
        </div>
        <div className="benefits-details">
          <div className="icon-center">
            <img src={IcLaptop} className="img-animation-benefits" />
          </div>
          <div className="title-center">
            <p>Semana</p>
            <p>Remota</p>
          </div>
        </div>
        <div className="benefits-details">
          <div className="icon-center">
            <img src={IcBrain} className="img-animation-benefits" />
          </div>
          <div className="title-center">
            <p>Trabajar</p>
            <p>en ultimas</p>
            <p>tecnologías</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
