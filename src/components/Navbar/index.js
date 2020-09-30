import React from "react";
import { Link, Element } from "react-scroll";
import Logo from "../Logo";
import Home from "../Home";
import Technologies from "../Technologies";
import Social from "../Social";
import Benefits from "../Benefits";
import Requirements from "../Requirements";
import Footer from "../Footer";
import "./navbar.css";

const NavBar = () => {

  return (
    <div className="inner">
      <div className="header-img">
        <div className="navbar">
          <nav>
            <a href="#" className="logo">
              <Logo width="15%" />
            </a>
            <ul className="nav-li">
              <li>
                <Link
                  activeClass="active"
                  className="test1"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="test2"
                  to="technologies"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Tecnologías
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="test3"
                  to="benefits"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Beneficios
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="test4"
                  to="requirements"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Requerimientos
                </Link>
              </li>
              {(!sessionStorage.getItem("token") && !localStorage.getItem("user_data")) && (
                <li className="btn-login-css">
                  <a href="/login" className="button">
                    Login
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <Element name="home" className="element">
          <Home />
        </Element>
      </div>

      <Element name="technologies" className="element">
        <Technologies />
      </Element>

      <Element name="social" className="element">
        <Social />
      </Element>

      <Element name="benefits" className="element">
        <Benefits />
      </Element>

      <Element name="requirements" className="element">
        <Requirements />
      </Element>

      <Element name="requirements" className="element">
        <Footer />
      </Element>
    </div>
  );
};

export default NavBar;
