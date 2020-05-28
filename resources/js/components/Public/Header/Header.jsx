import React from "react";
import Navbar from "../Navbar/Navbar";
import logo from '../../../assets/images/logo.png';
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="logo col-md-6">
                        <NavLink to="/"><img className="publicLogo" src={logo}/></NavLink>
                    </div>
                    <div className="navigation col-md-6">
                        <Navbar/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
