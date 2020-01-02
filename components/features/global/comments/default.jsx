import React from "react";

class Comments extends React.Component {
  state = { show: false };

  render() {
    return (
      <div className="col-6 offset-2">
        <div
          className="comments"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          <i class="fa fa-commenting-o"></i> <span>0 Comentarios </span>
        </div>
        {this.state.show ? (
          <div className="row">
            <div className="col-12">
              {" "}
              <p className="intro">
                Este es un espacio para la construcción de ideas, y de opinión.
              </p>
              <p class="sub_intro">
                Se busca crear un foro de convivencia y reflexión, no un
                escenario de ataques al pensamiento contrario
              </p>
              <div class="mensaje-error div-btn-send-notify">
                <span>
                  Su correo no ha sido confirmado. para poder opinar en los
                  contenidos de El Espectador debe confirmarlo haciendo click{" "}
                </span>
                <span class="btn-send-notify-user-zone">AQUÍ</span>
              </div>
              <div
                class="item-comment-chield"
                data-commentid="490687"
                data-name="danielm147_112725"
                data-nid="896413"
              >
                <div class="title">
                  <p class="comment-head">
                    danielm147_112725 <span>18/12/2019 - 10:49 am</span>
                  </p>
                </div>
                <p class="comment-body">
                  por favor revisen la redacción del articulo tiene varios
                  errores como el numero de títulos de Quickstep, si esta
                  competencia solo se ha corrido 2 veces
                </p>
                <div class="btns"></div>
                <div class="lchildren"></div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Comments;
