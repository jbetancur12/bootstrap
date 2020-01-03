import React from 'react';
import DateTimeInfo from "../../../utilities/DateTimeInfo";

const SportsSection = props => {
  const date = new Date();
	const today = DateTimeInfo(date,false);
  return (
    <>
      <div className="container">
        <hr/>
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="img-sports">
              <div className="img-sports-bm">
                <p>Fútbol colombiano - {today} </p>

                <h4>
                  Las lágrimas de Adrián Ramos
                </h4>
                
              </div>
            </div>	
            
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-6">
                <img src="https://www.elespectador.com/sites/default/files/styles/small_square_custom_user_md_1x/public/31_politica%2Cph01_20191230121003.jpg?itok=7YU1elHQ&timestamp=1577725811" width="100%" height="100%"/>
                
              </div>
              <div className="col-md-6">
                
                <h5 className="mb-0">El astrólogo del Congreso y su lectura del plano político</h5>
                <strong className="d-inline-block mb-2 text-primary">Política</strong>
                <div className="mb-1 text-muted">30 Dic 2019</div>
                          
              </div>								
            </div>
            {/* <div className="publicidad" style={{marginTop: "20px", backgroundColor: "#f7f9f9", textAlign:"center",height: "313px",width:"100%"}}>
              <h6>PUBLICIDAD</h6>
            </div>									 */}

            <div className="ad-space-top">
              <h6>PUBLICIDAD</h6>
            </div>
          </div>			
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="article-border">														

              <img src="https://www.elespectador.com/sites/default/files/styles/double_height_custom_user_md_1x/public/cartagena_1.png?itok=lMqFHXtU&timestamp=1577979865" width="100%" height="100%"/>
              <h4 className="mb-0">Getsemaní, Cartagena, uno de los barrios más visitados del mundo</h4>
              
              <strong className="d-inline-block mb-2 text-primary">Cultura</strong>
              <div className="mb-1 text-muted">Hace 1 hora</div>						
            </div>
          </div>
          <div className="col-md-4">
                                      
            <div className="article-not-img">
              <div>
                <h3 className="mb-0">Nombran alcalde encargado en Caucasia, mientras se resuelve la suspensión del electo</h3>
                <div>
                <strong className="article-city">Antioquia</strong>
                <p> - Hace 1 hora</p>
              </div>
              </div>																				
            </div>
            <div className="article-border">														
              <div className="article-top-2">
                <img src="https://www.elespectador.com/sites/default/files/styles/teaser_custom_user_md_1x/public/inundaciones_-_casas_palafito_0.jpg?itok=3JLJKZUR&timestamp=1577975227" width="100%" height="100%"/>
                <h4 className="mb-0">Más de mil familias afectadas por inundaciones en Unguía, Chocó</h4>
                <strong className="d-inline-block mb-2 text-primary">Nacional</strong>
                <div className="mb-1 text-muted">Hace 1 hora</div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="article-border">														
              <div className="article-top-2">
                <img src="https://www.elespectador.com/sites/default/files/styles/teaser_custom_user_md_1x/public/elecciones_15_2_0_0.jpg?itok=99ASa8Md&timestamp=1577982377" width="100%" height="100%"/>
                <h4 className="mb-0">Nombran alcalde encargado en Caucasia, mientras se resuelve la suspensión del electo </h4>
                <strong className="d-inline-block mb-2 text-primary">Bogotá</strong>
                <div className="mb-1 text-muted">Hace 1 hora</div>
              </div>
            </div>
            <div className="article-border">														
              <div className="article-top-2">
                <img src="https://www.elespectador.com/sites/default/files/styles/teaser_custom_user_md_1x/public/whatsapp_image_2020-01-01_at_1.16.47_pm.jpeg?itok=WyGfju8P&timestamp=1577930660" width="100%" height="100%"/>
                <h4 className="mb-0">Arranca la nueva era de Claudia López y estas son sus promesas</h4>
                <strong className="d-inline-block mb-2 text-primary">Bogotá</strong>
                <div className="mb-1 text-muted">Hace 1 hora</div>
              </div>
            </div>
          </div>									
        </div> 									
      </div>
    </>
  );
};

export default SportsSection;
