import React from 'react';
import DateTimeInfo from "../../../utilities/DateTimeInfo";

const SecondGeneralSection = props => {
  const date = new Date();
	const today = DateTimeInfo(date,false);
  return (
    <>
      <div className="container">
       
        <div className="row">
          <div className="col-md-4">
            <div className="article-border">														

              <img src="https://www.elespectador.com/sites/default/files/styles/teaser_custom_user_md_1x/public/efe_dday.jpg?itok=Tgknmgpq&timestamp=1577978797" width="100%" height="156"/>
              <h4 className="mb-0">Notas pedagógicas para una sociedad en crisis (II)</h4>
              
              <strong className="d-inline-block mb-2 text-primary">Cultura</strong>
              <div className="mb-1 text-muted">Hace 1 hora</div>						
            </div>
          </div>
          <div className="col-md-4">
            <div className="article-border">														

              <img src="https://www.elespectador.com/sites/default/files/styles/teaser_custom_user_md_1x/public/enhncawxsaajhq1.jpeg?itok=onJzjFLJ&timestamp=1578011907" width="100%" height="156"/>
              <h4 className="mb-0">Prográmese con los recorridos literarios por el centro de Bogotá</h4>
              
              <strong className="d-inline-block mb-2 text-primary">Bogotá</strong>
              <div className="mb-1 text-muted">Hace 1 hora</div>						
            </div>
          </div>
          <div className="col-md-4">
            <div className="ad-space-med">
                <h6>PUBLICIDAD</h6>
              </div>
            </div>     
      </div>


      <div className="row">
          <div className="col-md-4">
            <div className="article-border">														

              <img src="https://www.elespectador.com/sites/default/files/styles/teaser_custom_user_md_1x/public/whatsapp_image_2020-01-02_at_6.44.28_pm.jpeg?itok=zg7Seb41&timestamp=1578015938" width="100%" height="156"/>
              <h4 className="mb-0">“Vamos a sacar adelante a Hidroituango”: nuevo gerente de EPM</h4>
              
              <strong className="d-inline-block mb-2 text-primary">Economía</strong>
              <div className="mb-1 text-muted">2 Ene 2020</div>						
            </div>
          </div>
          <div className="col-md-4">
            <div className="article-border">														

              <img src="https://www.elespectador.com/sites/default/files/styles/teaser_custom_user_md_1x/public/3inter%2Cph01_20200102114224.jpg?itok=tx3L8kip&timestamp=1577983347" width="100%" height="156"/>
              <h4 className="mb-0">Predator, el terror de los migrantes</h4>
              
              <strong className="d-inline-block mb-2 text-primary">El Mundo</strong>
              <div className="mb-1 text-muted">2 Ene 2020</div>						
            </div>
          </div>
          <div className="col-md-4">
            <div className="article-border">														

              <img src="https://www.elespectador.com/sites/default/files/styles/teaser_custom_user_md_1x/public/anibal_gaviria_1.jpg?itok=924zHmmy&timestamp=1577914139" width="100%" height="156"/>
              <h4 className="mb-0">Los desafíos para gobernar a Antioquia que recibe Aníbal Gaviria</h4>
              
              <strong className="d-inline-block mb-2 text-primary">Política</strong>
              <div className="mb-1 text-muted">2 Ene 2020</div>						
            </div>
          </div>          
      </div>

            <div className="row">
          <div className="col-md-4">
            <div className="article-border">														

              <img src="https://www.elespectador.com/sites/default/files/styles/teaser_custom_user_md_1x/public/health-4343362_1920.jpg?itok=IT1VaPd_&timestamp=1577983394" width="100%" height="156"/>
              <h4 className="mb-0">Así se repartirán los $31,8 billones asignados para la salud en Colombia en 2020</h4>
              
              <strong className="d-inline-block mb-2 text-primary">Salud</strong>
              <div className="mb-1 text-muted">2 Ene 2020</div>						
            </div>
          </div>
          <div className="col-md-4">
            <div className="article-border">														

              <img src="https://www.elespectador.com/sites/default/files/styles/teaser_custom_user_md_1x/public/inundaciones_-_casas_palafito_0.jpg?itok=3JLJKZUR&timestamp=1577975227" width="100%" height="156"/>
              <h4 className="mb-0">Más de mil familias afectadas por inundaciones en Unguía, Chocó</h4>
              
              <strong className="d-inline-block mb-2 text-primary">Nacional</strong>
              <div className="mb-1 text-muted">2 Ene 2020</div>						
            </div>
          </div>
          <div className="col-md-4">
            <div className="article-border">														

              <img src="https://www.elespectador.com/sites/default/files/styles/teaser_custom_user_md_1x/public/e3ccb4fa6a5a2c039c26dd357359906a_0_0_0_0_0.jpg?itok=1rgzjIQe&timestamp=1578005863" width="100%" height="156"/>
              <h4 className="mb-0">Por una "inconsistencia", nuevo operador móvil renuncia a frecuencias en Colombia</h4>
              
              <strong className="d-inline-block mb-2 text-primary">Economía</strong>
              <div className="mb-1 text-muted">2 Ene 2020</div>						
            </div>
          </div>          
      </div>  	 		




    </div>
    </>
  );
};

export default SecondGeneralSection;
