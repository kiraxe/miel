import React, {useEffect, useState} from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

const Navbar = (props) => {

    const [dropMenu, setDropMenu] = useState(props.dropMenu);

    const [size, setSize] = useState(window.outerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setSize(window.outerWidth));
        setDropMenu(props.dropMenu);
    });


    return (
        <div className={dropMenu && size <= 1024 ? "active" : ""} id="dropMenu">
            <header>
                <div className="leftMenu">
                    <nav>
                        <Nav dropMenuClose={props.dropMenuClose} categories={props.categories} leftDropMenu={props.leftDropMenu} leftDropMenuHandler={props.leftDropMenuHandler}/>
                    </nav>
                </div>
            </header>
            <Footer/>
        </div>
    );
}

//passes match, history, location to Component
export default withRouter(Navbar);
