//Dependencies
import React, { Component } from 'react';

//Styles
import './Header.css';

//Images
import img from './profile.png';

class LandingPage extends Component {

	render(){

		return(

			<div className={'header-container center'}>

				<img src={img} className={'header-img'} alt={'img'} />

				<h1 className={'header-title'}>WE ARE BMKERO'S</h1>
				<hr className={'line'}/>

				<div>		
					<p className={'header-subtitle'}>Web Developer - Desktop Developer - Movil Developer</p>
				</div>
			</div>

		);
	}
}
export default LandingPage;
