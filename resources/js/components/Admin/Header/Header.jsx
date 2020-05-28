import React from 'react';
import logo from "../../../assets/images/logo.png";
import {Link} from "react-router-dom";

let Header = (props) => {
    return (
        <header className="fixed-top adminHeader">
            <div className="logo">
                <Link to="/admin"><img className="adminLogo" src={logo}/></Link>
            </div>
        </header>
    )
}

export default Header
