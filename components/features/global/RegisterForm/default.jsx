import React, { Fragment } from "react";

const RegisterForm = props => {
  const logoUrl =
    "https://www.elespectador.com/profiles/ee/modules/features/ft_ee_menus/img/logo-elespectador.png";
  return (
    <div className="col-8 offset-2 container-register">
      <div className="col-8 offset-2 text-center">
        <a href="https://www.elespectador.com">
          <img src={logoUrl} alt="El Espectador" style={{ width: "400px" }} />
        </a>
      </div>
      <div className="row">
        <div
          className="col-12 text-center mt-3"
          style={{ fontSize: "1.75rem" }}
        >
          Registrarse
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center mt-2">
          ¿Ya tienes una cuenta?{" "}
          <a href="https://www.elespectador.com/register-services/user/login">
            Iniciar Sesión
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-4 offset-1  mt-3">
          <div class="social-logig">
            <a
              class="fb_boton"
              href="https://www.facebook.com/v2.2/dialog/oauth?client_id=1558625051112723&amp;state=cafe0e1120fcab7642b53c10287076b7&amp;response_type=code&amp;sdk=php-sdk-5.6.3&amp;redirect_uri=https%3A%2F%2Fwww.elespectador.com%2Fregister-services%2Fuser%2Flogin%2Ffacebook&amp;scope=email"
            >
              <i
                class="fa fa-facebook"
                style={{ marginRight: "50px", fontSize: "20px" }}
              />
              Ingresar con Facebook
            </a>
            <a
              class="login g_login"
              href="https://accounts.google.com/o/oauth2/auth?response_type=code&amp;access_type=online&amp;client_id=318851369485-uttdiooh507a8gda8be3m10slmdhacop.apps.googleusercontent.com&amp;redirect_uri=https%3A%2F%2Fwww.elespectador.com%2Fregister-services%2Fuser%2Flogin%2Fgoogle&amp;state&amp;scope=email&amp;approval_prompt=auto"
            >
              <i
                class="fa fa-google-plus"
                style={{ marginRight: "50px", fontSize: "20px" }}
              ></i>
              Ingresar con Google
            </a>{" "}
            <p>
              Al registrarse a través de redes sociales está aceptando la{" "}
              <a
                href="/suscripciones/politica-de-tratamiento-de-datos-basic-page-705163"
                title="Tratamiento de datos"
              >
                Política de tratamiento de datos
              </a>{" "}
              y{" "}
              <a
                href="/terminos-y-condiciones-basic-page-683793"
                title="Términos y condiciones"
              >
                Términos y condiciones
              </a>{" "}
              de El Espectador.
            </p>
          </div>
        </div>
        <div className="col-5 offset-1 mt-3">
          <form>
            <div className="col-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre*"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apellido*"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Correo Electrónico*"
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group col-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="area"
                    required
                  />
                </div>
                <div className="form-group col-8">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Teléfono*"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirmar Contraseña"
                  required
                />
              </div>
              <span>
                Al registrarse, usted acepta recibir actualizaciones y ofertas
                especiales para los productos y servicios de El Espectador.
              </span>
              <div
                className="form-group"
                style={{ fontSize: "0.8rem", color: "#666" }}
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    required
                  />
                  <label className="form-check-label">
                    Política tratamiento de datos *
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    required
                  />
                  <label className="form-check-label">
                    Terminos y condiciones *
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    required
                  />
                  <label className="form-check-label">
                    Spy Mayor de edad *
                  </label>
                </div>
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-danger btn-block">
                  REGISTRARSE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
