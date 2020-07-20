import React from "react";
import {NavLink} from "react-router-dom";

const Logo = (props) => {
    return (
        <div className="col-xl-6 col-md-4 col-sm-4 col-5 logo">
            <NavLink className="logo-disktop" to="/"><img src="/images/logo.png"/></NavLink>
            <NavLink className="logo-mob" to="/"><img src="/images/logo-mob.png"/></NavLink>
        </div>
    )
}

export default Logo;
