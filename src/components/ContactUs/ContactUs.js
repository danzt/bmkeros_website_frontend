//Dependencies
import React, { Component } from 'react';

//Styles
import './ContactUs.css';

//Material-UI
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {

	paper : {
  		width: '58.6%',
		height: '100%',
		marginLeft: '20.7%'

	},
	fieldColor: {
		color: '#18BC9C',
	},

	buttonTextColor:{
		color: '#fff'
	},

	buttonCustumized:{
		width: 250,
	},
}

class ContactUs extends Component {

	render(){
		return(
			<div className={'contactUs-content center'}>
				<h2 className={'contactUs-title'}>CONTACTANOS</h2>
				<hr className={'line'}/>

				<div className="contactUs-paper-form">
					<Paper style={styles.paper} zDepth={5} >
						<div>
							<TextField 
								hintText={'Nombre'} 
								floatingLabelText={'Nombre'}
								type={'text'}
								underlineFocusStyle={{ borderColor: '#18BC9C' }} 
								floatingLabelFocusStyle={styles.fieldColor} 
							/>
    						<br />
	    					<TextField 
	    						hintText={'Correo electrónico'} 
	    						floatingLabelText={'Correo electrónico'} 
	    						type={'email'}
	    						underlineFocusStyle={{ borderColor: '#18BC9C' }} 
	    						floatingLabelFocusStyle={styles.fieldColor} 
	    					/>
							<br />
							<TextField 
								hintText={'Numero de teléfono'}
								floatingLabelText={'Numero de teléfono'} 
								type={'text'} 
								underlineFocusStyle={{ borderColor: '#18BC9C' }} 
								floatingLabelFocusStyle={styles.fieldColor} 
							/>
							<br />
							<TextField 
								hintText={'Coméntanos'}
								floatingLabelText={'Coméntanos'}
								underlineFocusStyle={{ borderColor: '#18BC9C'}} 
								floatingLabelFocusStyle={styles.fieldColor}
								multiLine={true}
								rows={2}
								rowsMax={4}
								className={'contactUs-comment'}
							/>
							<br />
						</div>

						<div className={'contactUs-button'}>
							<RaisedButton 
								label={'Enviar'}
								backgroundColor={'#18BC9C'}
								labelColor={'#fff'} 
								buttonStyle={styles.buttonTextColor} 
								style={styles.buttonCustumized}
							/>
						</div>
					</Paper>	
    			</div>
			</div>

		);
	}
}
 export default ContactUs;