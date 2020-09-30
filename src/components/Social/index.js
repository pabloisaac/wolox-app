import React from "react";
import "./social.css";
import IconTwitter from "../../assets/twitter.png";

const Social = () => {
  return (
    <div className="flexbox-container-social">
      <div className="img-social center-title-social">
        <div className="title-social-twitter">
          <div className="title-woloxers">
            <p>
              <span className="green-color font-bold"> 350 + </span>
              <span className="blue-color font-bold">Woloxers</span>
            </p>
          </div>
          <div className="flexbox-icon">
            <div className="center-icon-text">
              <img src={IconTwitter} className="icon-twitter" alt="icTwitter"/>
              <p> @Wolox </p>
            </div>
          </div>
          <div className="hover-btn">
            <a href="https://twitter.com/Wolox" className="button-social">
              Siguenos
            </a>
          </div>
        </div>
      </div>
      <div className="center-title-social background-content">
        <div className="title-social">
          <p>Trabajamos para </p>
          <p>
            <span className="blue-color font-semibold">convertir</span>
            <span className="green-color font-semibold"> ideas</span> en
          </p>
          <p>productos </p>
        </div>
      </div>
    </div>
  );
};

export default Social;
