import React from "react";
import Bars from "./Bars/Bars";
import Logo from "./Logo/Logo";
import RightPanel from "./RightPanel/RightPanel";


const Header = (props) => {
    return (
        <header>
            <div className="container-my">
                <div className="row flex-nowrap">
                    <Bars/>
                    <Logo/>
                    <RightPanel phone={props.phone}/>
                </div>
            </div>
        </header>
    )
}

export default Header;
