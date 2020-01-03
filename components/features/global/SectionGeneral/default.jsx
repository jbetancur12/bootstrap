import React from 'react';
import DateTimeInfo from "../../../utilities/DateTimeInfo";

const SectionGeneral = props => {
  const date = new Date();
	const today = DateTimeInfo(date,false);
  return (
    <>
      <div className="container">
        <div className="row">
        <div className="col-md-8">
          <div className="img-degrade">
          <div className="img-degrade-bm">
          <div className="col-md-6"><h4>
          David Bisbal lanza "En tus planes", su álbum más variado
          </h4><br></br>
          <div>
          <p>Música - {today} </p></div>
          </div>
          
          
          </div>
          </div>
        </div>
        <div className="col-md-4">
            <div className="article-border">														
              <div className="article-top-2">
                <img src="https://www.elespectador.com/sites/default/files/milky_way_palau.jpg" width="100%" height="126"/>
                <h6 className="mb-0">Palaos, el primer país que prohíbe los protectores solares para salvar a sus corales  </h6>
                <strong className="d-inline-block mb-2 text-primary">Medio Ambiente</strong>
                <div className="mb-1 text-muted">Hace 1 hora</div>
              </div>
            </div>
        </div>		


        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="article-border">														

              <img src="https://www.elespectador.com/sites/default/files/styles/teaser_custom_user_md_1x/public/elecciones_15_2_0_0.jpg?itok=99ASa8Md&timestamp=1577982377" width="100%" height="156"/>
              <h4 className="mb-0">Nombran alcalde encargado en Caucasia, mientras se resuelve la suspensión del electo</h4>
              
              <strong className="d-inline-block mb-2 text-primary">Antioquia</strong>
              <div className="mb-1 text-muted">Hace 1 hora</div>						
            </div>
          </div>
          <div className="col-md-4">
            <div className="article-border">														

              <img src="https://www.elespectador.com/sites/default/files/styles/teaser_custom_user_md_1x/public/02tema_caliph01_20200101120733_0.jpg?itok=HCRo0DTf&timestamp=1577910324" width="100%" height="156"/>
              <h4 className="mb-0">Los desafíos que recibe Jorge Iván Ospina en Cali</h4>
              
              <strong className="d-inline-block mb-2 text-primary">Política</strong>
              <div className="mb-1 text-muted">Hace 1 hora</div>						
            </div>
          </div>
          <div className="col-md-4">
            <div className="article-border">														

              <img src="https://www.elespectador.com/sites/default/files/styles/teaser_custom_user_md_1x/public/gettyimages-1096322876-1.jpg?itok=cHW2atSb&timestamp=1577985510" width="100%" height="156"/>
              <h4 className="mb-0">Estas son las diez personas más ricas del mundo</h4>
              
              <strong className="d-inline-block mb-2 text-primary">Economía</strong>
              <div className="mb-1 text-muted">Hace 1 hora</div>						
            </div>
          </div>
          
                            
        </div> 		




      </div>
    </>
  );
};

export default SectionGeneral;
