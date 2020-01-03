import React from 'react';

const Article = props => {
  return (
    <>
      <div className="row">
        <div className="col-1 offset-1 mt-3 px-5" >
          <ul class="social-preset text-right">
            <li class="facebook">
              <span>
                <a
                  href="http://www.facebook.com/sharer/sharer.php?u=http://www.elespectador.com/secciones/libros/el-ebola-ha-matado-mas-de-2000-personas-en-el-congo-desde-agosto-de-2018-articulo-897809"
                  target="popup"
                  rel="nofollow"
                  onclick="window.open(this.href, this.target, 'width=566,height=585,left=(screen.width/2)-(566/2),top=(screen.width/2)-(585/2)'); return false;"
                >
                  <i class="fa fa-facebook"></i>
                </a>
              </span>
            </li>
            <li class="google">
              <span>
                <a
                  href="https://plus.google.com/share?url=http://www.elespectador.com/secciones/libros/el-ebola-ha-matado-mas-de-2000-personas-en-el-congo-desde-agosto-de-2018-articulo-897809"
                  target="popup"
                  rel="nofollow"
                  onclick="window.open(this.href, this.target, 'width=566,height=585,left=(screen.width/2)-(566/2),top=(screen.width/2)-(585/2)'); return false;"
                >
                  <i class="fa fa-google-plus"></i>
                </a>
              </span>
            </li>
            <li class="twitter">
              <span>
                <a
                  href="https://twitter.com/intent/tweet?via=elespectador&amp;source=webclient&amp;url=http://tinyurl.com/ubmf7ur&amp;text=El+%C3%89bola+ha+matado+m%C3%A1s+de+2.000+personas+en+el+Congo+desde+agosto+de+2018"
                  rel="nofollow"
                >
                  <i class="fa fa-twitter"></i>
                </a>
              </span>
            </li>
            <li class="whatsapp">
              <span>
                <a
                  href="whatsapp://send?text=El Ébola ha matado más de 2.000 personas en el Congo desde agosto de 2018 - http://tinyurl.com/ubmf7ur?"
                  target="_blank"
                >
                  <i class="fa fa-whatsapp"></i>
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-6" >
          <div className="breadcrumbs ">
            <a href="/" data-key="home" style={{color: "red"}}>
              Inicio
            </a>
            <span>/</span>
            <a href="/secciones/libros" style={{color: "red"}}>libros</a>
            <span>/</span>
            <span className="text-gradient">
              el ebola ha matado mas de 2000 personas en el congo desde agosto
              de 2018 articulo 897809
            </span>
          </div>
          
          <h1>
            El Ébola ha matado más de 2.000 personas en el Congo desde agosto de
            2018
          </h1>
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <a href="https://www.elespectador.com/secciones/libros" style={{color: "red"}}>
                Libros 29 Dic 2019 - 12:30 PM
              </a>
              <span>Por: * Redacción AFP</span>
            </div>
            <article
              className="mt-3"
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.875rem",
                color: "#1d1d1d"
              }}
            >
              <p>
                La actual epidemia del Ébola es la décima en territorio congolés
                desde 1976 y la segunda epidemia más grave de la historia
                después de la de África del Oeste en 2014 .{" "}
              </p>
              <div className="img-cap">
                <div className="img-cap-bm">
                  Un total de 3.373 casos de contagiados con el virus del Ébola
                  fueron registrados en la República Democrática del Congo
                  (RDC), de los cuales murieron 2.231 desde agosto de 2018.AFP
                </div>
              </div>
              <p>
                Un total de 3.373 casos de contagiados con el virus del Ébola
                fueron registrados en la República Democrática del Congo (RDC),
                de los cuales murieron 2.231 desde agosto de 2018, indicaron
                este domingo las autoridades de Salud del país africano.{" "}
              </p>
              <p>
                El reporte difundido por el Comité Multisectoriel de Respuesta a
                la Epidemia (CMRE) acumula los casos desde el inicio de que hace
                16 meses fue declarada la epidemia, que afecta principalmente a
                las provincias de Kivu del Note e Ituri, en el este.{" "}
              </p>
              <a href="" style={{ color: "red" }}>
                (Lea: Dos tratamientos podrían acabar con el brote de ébola del
                Congo)
              </a>{" "}
              <p>
                Las autoridades sanitarias informaron además que "se están
                investigando 341 casos sospechosos". Las acciones de lucha
                contra la enfermedad se ven perturbadas periódicamente debido a
                la presencia de{" "}
                <strong>numerosas milicias en las zonas afectadas.</strong>
              </p>{" "}
              <p>
                Miembros de los equipos sanitarios han resultado muertos o
                heridos en ataques armados en Kivu del Norte y en Ituri, y los
                centros de salud creados para tratar a las víctimas son también
                blanco de atentados.{" "}
              </p>{" "}
              <a href="" style={{ color: "red" }}>
                (Lea: Ébola: ¿Qué pasó con la epidemia un año después del peor
                brote del virus?)
              </a>{" "}
              <p>
                La actual epidemia del Ébola es la décima en territorio congolés
                desde 1976 y la segunda epidemia más grave de la historia
                después de la del África del Oeste en 2014 (
                <strong>
                  11.000 muertos en Liberia, Sierra Leona y Guinea
                </strong>
                ).
              </p>
            </article>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-2">
          <h6>Temas Relacionados</h6>
          <div className="tags">
            <div >
              <a href="https://www.elespectador.com/tags/conflicto-en-republica-democratica-del-congo">
                Conflicto en República Democrática del Congo
              </a>
            </div>
            <div>
              <a href="https://www.elespectador.com/tags/ebola-en-el-congo">
                Ébola en el Congo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
