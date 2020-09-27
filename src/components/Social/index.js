import React from "react";
import "./index.css";
import IconTwitter from "../../assets/twitter.png";

const Social = () => {
  return (
    <div className="flexbox-container-social">
      <div className="img-social center-title-social">
        <div className="title-social-twitter">
          <div className="title-woloxers">
            <p>
              <span className="green-color"> 350 + </span>
              <span className="blue-color">Woloxers</span>
            </p>
          </div>
          <div className="flexbox-icon">
            <div className="center-icon-text">
              <img src={IconTwitter} className="icon-twitter" />
              <p> @Wolox </p>
            </div>
          </div>
          <div>
            <ul className="nav-li">
              <li>
                <a href="https://twitter.com/Wolox" className="button-social">
                  Siguenos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="center-title-social background-content">
        <div className="title-social">
          <p>Trabajamos para </p>
          <p>
            <span className="blue-color">convertir</span>
            <span className="green-color"> ideas</span> en
          </p>
          <p>productos </p>
        </div>
      </div>
    </div>
  );
};

export default Social;
