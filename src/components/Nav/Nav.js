//Dependencies
import React, { Component } from 'react';

//Styles
import './Nav.css'

//Assets
import Menu from '../Menu/Menu'
import Modal from '../Modal/Modal'

//Material-UI
import Appbar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Person from 'material-ui/svg-icons/social/person';


const styles = {
  	navColor: {
    	background: '#2C3E50',
  	},
};

class Nav extends Component{

	constructor(props) {
	  	super(props);
	  	this.state = {menu: false, modal: false};
	}

	handleToggleMenu = () => this.setState({menu: !this.state.menu});
	handleToggleModal = () => this.setState({modal: !this.state.modal});

	render(){
		return (
			<Appbar
				style={styles.navColor}
				title={<span className={'title-nav'}>BMKERO'S</span>}
				onLeftIconButtonTouchTap={this.handleToggleMenu}
				iconElementRight={<FlatButton label="Iniciar Sesion" icon={<Person />}
				onTouchTap={this.handleToggleModal}/>}>

			    <Menu
			    	open={this.state.menu}
			    	onTouchTap={this.handleToggleMenu}
			    	onRequestChange={this.handleToggleMenu}
			    />

			    <Modal
			    	open={this.state.modal}
			    	onTouchTapCancel={this.handleToggleModal}
			    	onRequestClose={this.handleToggleModal}
			    />
			</Appbar>

		);
	}
}

export default Nav;
