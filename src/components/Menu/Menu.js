//Dependencies
import React from 'react'
import {Link} from 'react-router-dom';

//Styles
import './Menu.css'

//Material-UI
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import SvgIcon from 'material-ui/SvgIcon';
import Divider from 'material-ui/Divider';
import MailOutline from 'material-ui/svg-icons/communication/mail-outline';
import People from 'material-ui/svg-icons/social/people';
import Apps from 'material-ui/svg-icons/navigation/apps.js';
import {ListItem} from 'material-ui/List';

const HomeIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </SvgIcon>
);

class Menu extends React.Component {

    render() {
        return (
            <div classID="nav">
                <Drawer
                    docked={false}
                    open={this.props.open}
                    onRequestChange={this.props.onRequestChange}>

                    <Link to={'/'}>
                        <MenuItem
                            primaryText={"Bmkero's"}
                            onTouchTap={this.props.onTouchTap}
                            leftIcon={<HomeIcon />}
                        />
                    </Link>

                    <Link to={'/projects'}>
                        <MenuItem
                            primaryText={'Proyectos'}
                            onTouchTap={this.props.onTouchTap}
                            leftIcon={<Apps />}
                        />
                    </Link>

                    <Link to={'/about'}>
                        <MenuItem
                            primaryText={'¿Quienes Somos?'}
                            onTouchTap={this.props.onTouchTap}
                            leftIcon={<People />}
                        />
                    </Link>

                    <Link to={'/visor_carnet'}>
                        <MenuItem
                            primaryText={'Visor de Carnet'}
                            onTouchTap={this.props.onTouchTap}
                            leftIcon={<People/>}
                        />
                    </Link>

                    <Divider />

                    <Link to={'/contact'}>
                        <ListItem
                            primaryText={'Contáctanos'}
                            secondaryText={'Envíanos tu comentario'}
                            onTouchTap={this.props.onTouchTap}
                            leftIcon={<MailOutline />}
                        />
                    </Link>
                </Drawer>
            </div>
        );
    }
}

export default Menu;
