//Dependencies
import React, { Component } from 'react';

//Styles
import './WhoWeAre.css'

class WhoWeAre extends Component{

	render(){
		return(
			<div className={'WhoWeAre-content'}>
				<h2 className={'WhoWeAre-title'}>BMKRO'S?</h2>
				<hr className={'line'}/>
					
				<div className={'WhoWeAre-information'}>
					<div>
					    <p>Somos una organizacion de developers freelancers, o lo que es lo mismo decir, desarrolladores de libre dedicacion, con un unico interes el cual es hacer la vida de cualquier usuario la mas versatil y grata en el mundo tecnologico, acabando con el poco interes de muchos que conllevan una idea, que la tecnologia es solo para ciberneticos informaticos.</p>
					</div>
				
					<div>
					    <p>¿Como logramos esta hazaña? De una manera sencilla. Creando Aplicaciones que sean del uso sencillo y grato al cliente, contibullendo a la evolucion  tecnológico que nos arropa y nos integra a todos sin autorizacion alguna. Bmkeros pone a la mano de cualquier persona, empresa, organizacion y asociacion, la oportunidad de desarrollarse, porque ahora Poner un pie en la luna resulta mas sencillo con un puente al que llamamos Internet!</p>
					</div>
				
					<div>
					    <p className={'WhoWeAre-text-color'}>¡We are Bmkero's!</p>
					</div>
				</div>
			</div>
		);
	}
}

export default WhoWeAre;
