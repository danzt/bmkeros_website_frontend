//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';

//Styles
import './App.css';

//Assets
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

//Material-UI
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {

    constructor(){
        super();
       	injectTapEventPlugin();
    }

	static propTypes = {
		children: PropTypes.object.isRequired
	};

    render() {
    	//const { children } = this.props;
    	
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
            	<div>
            	    <Nav/>
        	        <Content body={this.props.children}/>
        	        <Footer/>
            	</div>
            </MuiThemeProvider> 
        );
    }
}

export default App;
