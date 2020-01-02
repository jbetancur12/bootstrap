import React, { Fragment } from "react";

import dateTimeInfo from "../../../utilities/DateTimeInfo";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {  
      menu: false
    };
  }

  render() {
    const date = new Date();
    const dateTime = dateTimeInfo(date, false);
    const logoUrl =
      "https://www.elespectador.com/profiles/ee/modules/features/ft_ee_menus/img/logo-elespectador.png";
    return (
      <div className="col-12">
        <div className="row align-items-center my-2">
          {/* Header */}
          <div className="col-3">
            <div className="logo-container">
              <img
                src={logoUrl}
                alt="El Espectador"
                style={{ maxWidth: "380px" }}
              />
            </div>
          </div>
          {/* Time */}
          <div className="col-2 ml-5">{dateTime}</div>
          {/* Social */}
          <div className="col-3 ">
            <ul className="">
              {/* <li>
                <a
                  href="/deportes/partidos-de-futbol-hoy-en-vivo/?utm_source=elespectador.com&amp;utm_medium=referral&amp;utm_campaign=Boton-Parrilla-Header"
                  className="parrilla-tv-link-mobile"
                />
              </li> */}
              {/* <li
            className="leaf exclusive-content-container"
            style={{ display: "inline" }}
          >
            <a href="/contenido-exclusivo" className="exclusive-content-link" />
          </li> */}
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
          <div className="col-12 " style={{ height: "10px" }}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center d-flex justify-content-between">
              {/* <div className="main-navigation"> */}
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
                style={{ position: "relative" }}
              >
                <ul className="navbar-nav mr-auto nav-fill w-100">
                  <li id="menu-item-0" className="nav-item active dropdown">
                    <a className="nav-link" onMouseMove={this.showDropdownMenu}>
                      Noticias
                    </a>
                  </li>
                  <li
                    id="menu-item-1"
                    className="nav-item dropdown"
                    onClick={() => this.setState({ menu: !this.state.menu })}
                  >
                    <a className="nav-link " href="#">
                      Opinión
                    </a>
                    {this.state.menu ? (
                      <>
                        <div
                          style={{
                            position: "fixed",
                            color: "white",
                            width: "200px",
                            zIndex: "-1",
                            marginLeft: "-4px"
                          }}
                          aria-labelledby="navbarDropdownMenuLink"
                          className=" text-left bg-dark"
                        >
                          <table className="table table-dark table-sm mt-3 ">
                            <tbody>
                              <tr>
                                <td>Politica</td>
                                <td>Medio Ambiente</td>
                              </tr>
                              <tr>
                                <td>Investigación</td>
                                <td>El Mundo</td>
                              </tr>
                              <tr>
                                <td>Bogotá</td>
                                <td>Educación</td>
                              </tr>
                              <tr>
                                <td>Judicial</td>
                                <td>Paz</td>
                              </tr>
                              <tr>
                                <td>Salud</td>
                                <td>Nacional</td>
                              </tr>
                              <tr>
                                <td>Actualidad</td>
                                <td>Ciencia</td>
                              </tr>
                              <tr>
                                <td>Alto Turmequé</td>
                                <td>Redes Sociales</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </>
                    ) : null}
                  </li>

                  <li id="menu-item-2" className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.washingtonpost.com/sports/?nid=top_nav_sports"
                    >
                      Economía
                    </a>
                  </li>
                  <li id="menu-item-3" className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.washingtonpost.com/local/?nid=top_nav_d.c.,md.-amp;va."
                    >
                      Deportes
                    </a>
                  </li>
                  <li id="menu-item-4" className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.washingtonpost.com/national/?nid=top_nav_national"
                    >
                      Entretenimiento
                    </a>
                  </li>
                  <li id="menu-item-5" className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.washingtonpost.com/world/?nid=top_nav_world"
                    >
                      Cultura
                    </a>
                  </li>
                  <li id="menu-item-6" className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.washingtonpost.com/business/?nid=top_nav_business"
                    >
                      Cromos
                    </a>
                  </li>
                  <li id="menu-item-7" className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.washingtonpost.com/business/technology/?nid=top_nav_tech"
                    >
                      Tecnología
                    </a>
                  </li>
                  <li id="menu-item-8" className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.washingtonpost.com/business/technology/?nid=top_nav_tech"
                    >
                      Blogs
                    </a>
                  </li>
                  <li id="menu-item-9" className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.washingtonpost.com/business/technology/?nid=top_nav_tech"
                    >
                      Colombia 2020
                    </a>
                  </li>
                  <li id="menu-item-10" className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.washingtonpost.com/business/technology/?nid=top_nav_tech"
                    >
                      Especiales
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            {this.state.menu ? (
              <div style={{ height: "6px", background: "red" }} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
