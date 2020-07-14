import React, {useState, useEffect} from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PopupForm from "./PopupForm/PopupForm";

const Popup = (props) => {
    return (
        <div id="popup">
            <div className="popup-box auth">
                <div className="header">
                    <span className="popup-close"></span>
                    <ul className="popup-form-menu">
                        <li><a href="#">Авторизация</a></li>
                        <li className="active"><a href="#">Регистрация</a></li>
                    </ul>
                </div>
                <div className="content">
                    <PopupForm/>
                </div>
            </div>
        </div>
    )
}

export default Popup;
