	//Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Styles
import './Footer.css'

class Footer extends Component{

	render(){
		return(
		    <div className={'footer-above center'}>
				<div className={'footer-content'}>
					<div className={'footer-padding'}>
						<h2>Ubicanos</h2>
						<p>Venezuela-Falcon<br/>
						Ciudad Coro, a tu Disposicion!</p>
					</div>
				</div>

				<div className={'footer-content'}>
					<div className={'footer-padding'}>
						<h2>Encuentra Bmkero's tambien en:</h2>
						<p>Venezuela-Falcon<br/>
						Ciudad Coro, a tu Disposicion!</p>
					</div>
				</div>
			
				<div className={'footer-content'}>
					<div className={'footer-padding'}>
						<h2>Mas Proyectos Bmkero's</h2>
						<p>Nuestra lista de desarrollo al alcanse de todos!
							<Link to={'/'}><a> We Are Bmkero's</a></Link>
						</p>
						 
					</div>					
				</div>

				<div className={'footer-below'}>Copyright © Bmkero's 2017</div>
		    </div>	
		);
	}
}

export default Footer;
