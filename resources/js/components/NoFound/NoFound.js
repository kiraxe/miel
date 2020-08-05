import React from 'react';
import {NavLink} from "react-router-dom";

const NotFound = () => {
    return (
        <div id="noFound">
            <div>
                <h1> 404 - Страница не найдена</h1>
                <NavLink className="logo-disktop" to="/"><img src="/images/logo.png"/></NavLink>
            </div>
        </div>
    )
}

export default NotFound;
