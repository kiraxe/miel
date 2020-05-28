import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {rus as LanguageRus} from '../../Language';

class Navbar extends Component {

    render() {

        const logoutBtnClicked = () => {
            //Perform Logout and then reach the homeepage anyway (success, fail)
            this.props.logout();
        }
        return (
            <ul className="nav menu">
                <li><NavLink to="/admin/products"><em className="fa fa-tags">&nbsp;</em> {LanguageRus.sidebar.menu.products}</NavLink></li>
                <li><NavLink to="/admin/clientele"><em className="fa fa-user-circle">&nbsp;</em> {LanguageRus.sidebar.menu.clientele}</NavLink></li>
                <li><a className="logout" onClick={logoutBtnClicked} ><em className="fa fa-power-off">&nbsp;</em> {LanguageRus.sidebar.menu.logout}</a></li>
            </ul>
        );
    }
}

//passes match, history, location to Component
export default withRouter(Navbar);
