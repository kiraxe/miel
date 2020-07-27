import React from "react";
import {NavLink} from "react-router-dom";


const RightPanel = (props) => {
    return (
        <div className="col-xl-6 col-md-4 col-sm-4 col-5 right-panel">
            <div className="row justify-content-end">
                <div><a className="phone" href={`tel:${props.phone}`}><span>{props.phone}</span></a></div>
                <div>{ props.isLoggedIn && props.permission === "Client"
                && <a onClick={props.onLogout} className="login" href="#"><span>Выход</span></a>
                || props.isLoggedIn && props.permission === "Admin" && <NavLink className="login" to={'/admin'}><span>Админ-панель</span></NavLink> || <a onClick={props.popUpOpen} className="login" href="#"><span>Вход</span></a>
                }</div>
                <div><NavLink className="cart" to="/basket"><span>Корзина</span></NavLink></div>
            </div>
        </div>
    )
}

export default RightPanel;
