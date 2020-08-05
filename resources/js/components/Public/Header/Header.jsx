import React from "react";
import Bars from "./Bars/Bars";
import Logo from "./Logo/Logo";
import RightPanel from "./RightPanel/RightPanel";


const Header = (props) => {
    return (
        <header>
            <div className="container-my">
                <div className="row flex-nowrap">
                    <Bars dropMenuHandler={props.dropMenuHandler}/>
                    <Logo/>
                    <RightPanel menuAccount={props.menuAccount} cart={props.cart} onLogout={props.onLogout} popUpOpen={props.popUpOpen} isLoggedIn={props.isLoggedIn} permission={props.permission} phone={props.phone}/>
                </div>
            </div>
        </header>
    )
}

export default Header;
