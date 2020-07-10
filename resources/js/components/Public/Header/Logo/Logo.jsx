import React from "react";

const Logo = (props) => {
    return (
        <div className="col-xl-6 col-md-4 col-sm-4 col-5 logo">
            <a className="logo-disktop" href="#"><img src="images/logo.png"/></a>
            <a className="logo-mob" href="#"><img src="images/logo-mob.png"/></a>
        </div>
    )
}

export default Logo;
