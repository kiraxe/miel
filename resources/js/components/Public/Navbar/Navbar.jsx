import React, { Component} from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

const Navbar = () => {
    return (
        <div id="dropMenu">
            <header>
                <div className="leftMenu">
                    <nav>
                        <Nav/>
                    </nav>
                </div>
            </header>
            <Footer/>
        </div>
    );
}

//passes match, history, location to Component
export default withRouter(Navbar);
