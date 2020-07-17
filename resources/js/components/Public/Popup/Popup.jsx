import React, {useState, useEffect} from "react";
import PopupForm from "./PopupForm/PopupForm";
import PopupFormLogin from "./PopupFormLogin/PopupFormLogin";

const Popup = (props) => {

    const [formVariable , setVariableForm] = useState('reg');

    const formVariableHandler = (e) => {
        setVariableForm(e.target.getAttribute('data-type'));
    }

    const visibility = {
        display: "block",
    }

    let form = formVariable === "reg" ? <PopupForm permission={props.permission} isLoggedIn={props.isLoggedIn} errorReg={props.errorReg} addClient={props.addClient}/> : <PopupFormLogin permission={props.permission} isLoggedIn={props.isLoggedIn} error={props.error} onLogin={props.onLogin}/>

    return (
        <div id="popup" style={props.popUp ? visibility : null}>
            <div className="popup-box auth">
                <div className="header">
                    <span onClick={props.popUpClose} className="popup-close"></span>
                    <ul className="popup-form-menu">
                        <li onClick={formVariableHandler} className={formVariable === "login" ? "active" : ""}><a data-type="login" href="#">Авторизация</a></li>
                        <li onClick={formVariableHandler} className={formVariable === "reg" ? "active" : ""}><a data-type="reg" href="#">Регистрация</a></li>
                    </ul>
                </div>
                <div className="content">
                    {form}
                </div>
            </div>
        </div>
    )
}

export default Popup;
