import React, { Fragment } from "react";

import dateTimeInfo from "../../../utilities/DateTimeInfo";

class Header2 extends React.Component {
  constructor() {
    super();
    this.state = {
      menuNoticias: false,
      menuDeportes: false
    };
  }

  render() {
    const date = new Date();
    const dateTime = dateTimeInfo(date, false);
    const logoUrl =
      "https://www.elespectador.com/profiles/ee/modules/features/ft_ee_menus/img/logo-elespectador.png";
    const Noticias = (
      <div
        className="flex_container"
        style={{ position: "absolute", color: "white" }}
      >
        <ul className="">
          <li>Politica</li>
          <li>Investigación</li>
          <li>Bogotá</li>
          <li>Judicial</li>
          <li>Salud</li>
          <li>Actualidad</li>
          <li>Alto Turmequé</li>
          <li>Medio Ambiente</li>
          <li>El Mundo</li>
          <li>Educación</li>
          <li>Paz</li>
          <li>Nacional</li>
          <li>Ciencia</li>
          <li>Redes Sociales</li>
        </ul>
      </div>
    );
    const Deportes = (
      <div
        className="flex_container-deportes"
        style={{ position: "absolute", color: "white" }}
      >
        <ul className="d-flex flex-column">
          <li>Fútbol Colombiano</li>
          <li>Fútbol Internacional</li>
          <li>Ciclismo</li>
          <li>Automovilismo</li>
          <li>Baloncesto</li>
          <li>Béisbol</li>
          <li>Golf</li>
          <li>Tenis</li>
          <li>Fútbol por TV</li>
        </ul>
      </div>
    );
    return (
      <div className="col-12">
        <div className="row align-items-center my-2">
          <div className="col-3">
            <div className="logo-container">
              <img
                src={logoUrl}
                alt="El Espectador"
                style={{ maxWidth: "380px" }}
              />
            </div>
          </div>
          <div className="col-2 ml-5">{dateTime}</div>
          <div className="col-3 ">
            <ul className="">
            <li className="leaf">
                <a
                  href="https://www.facebook.com/elespectadorcom"
                  className="tv-icon"
                >                  
                </a>
              </li>
              <li className="leaf">
                <a
                  href="https://www.facebook.com/elespectadorcom"
                  rel="nofollow"
                  target="_blank"
                >
                  <i className="fa fa-lock"></i>
                </a>
              </li>
              <li className="leaf">
                <a
                  href="https://www.facebook.com/elespectadorcom"
                  rel="nofollow"
                  target="_blank"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="leaf">
                <a
                  href="https://twitter.com/elespectador"
                  rel="nofollow"
                  target="_blank"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="leaf">
                <a
                  href="https://www.youtube.com/user/Elespectadorcom?sub_confirmation=1 "
                  rel="nofollow"
                  target="_blank"
                >
                  <i className="fa fa-youtube-play"></i>
                </a>
              </li>
              <li className="last leaf">
                <a href="https://www.instagram.com/elespectador/">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* Buttons */}
          <div className="col-3 ">
            <a href="52.3.159.205/registro" className="btn btn-yee">
              Suscribete
            </a>
            <a className="btn btn-dark ml-2" style={{ color: "#fff" }}>
              Iniciar Sesión
            </a>
          </div>
        </div>
        <div className=" row ">
          <div className="navbar-ee  ">
            <ul className="w-100 d-flex justify-content-between">
              <li
                onMouseEnter={() => this.setState({ menuNoticias: true })}
                onMouseLeave={() => this.setState({ menuNoticias: false })}
              >
                <a href="">
                  <span>Noticias</span>
                  <i className="fa fa-chevron-down"></i>
                </a>
                {this.state.menuNoticias && Noticias}
              </li>
              <li>
                <a href="">Opinión</a>
              </li>
              <li>
                <a href="">Economía</a>
              </li>
              <li
                onMouseEnter={() => this.setState({ menuDeportes: true })}
                onMouseLeave={() => this.setState({ menuDeportes: false })}
              >
                <a href="">
                  <span>Deportes</span>
                  <i className="fa fa-chevron-down"></i>
                </a>
                {this.state.menuDeportes && Deportes}
              </li>
              <li>
                <a href="">
                  <span>Entretenimiento</span>
                  <i className="fa fa-chevron-down"></i>
                </a>
              </li>
              <li>
                <a href="">Cultura</a>
              </li>
              <li>
                <a href="">
                  <span>Cromos</span>
                  <i className="fa fa-chevron-down"></i>
                </a>
              </li>
              <li>
                <a href="">Tecnología</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">
                  <span>Colombia 2020</span>
                  <i className="fa fa-chevron-down"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Especiales</span>
                  <i className="fa fa-chevron-down"></i>
                </a>
              </li>
            </ul>
          </div>
          <div
            className="col-12"
            style={{
              width: "100%",
              height: "4px",
              backgroundColor: "red",
              position: "relative"
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Header2;
