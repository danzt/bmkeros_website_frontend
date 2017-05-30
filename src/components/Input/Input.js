import React, { Component } from 'react';
import Button from '../Button/Button'

class Input extends Component{

	render(){
		return(
			<form onSubmit={this.props.submit}>
				<input type={this.props.type} placeholder={this.props.placehold} name="name"/>

				<Button />
			</form>
		);
	}
}

export default Input;
