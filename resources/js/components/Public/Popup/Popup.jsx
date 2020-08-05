import React, {useState, useEffect} from "react";
import PopupForm from "./PopupForm/PopupForm";
import PopupFormLogin from "./PopupFormLogin/PopupFormLogin";
import PopupOrder from "./PopupOrder/PopupOrder";
import PopupFormMessage from "./PopupMessage/PopupFormMessage";
import PopupMessage from "./PopupMessage/PopupMessage";

const Popup = (props) => {

    const [formVariable , setVariableForm] = useState('reg');

    const formVariableHandler = (e) => {
        setVariableForm(e.target.getAttribute('data-type'));
    }

    const visibility = {
        display: "block",
    }

    useEffect(() => {
        return () => {}
    }, [])

    useEffect(() => {

        if (props.orderId) {
            setVariableForm('order');
        }
        if (!props.orderId && formVariable === 'order') {
            setVariableForm('reg');
        }
        if (!props.send && formVariable === 'message') {
            setVariableForm('reg');
        }
        if (props.messagePopup) {
            setVariableForm('message');
        }
    })


    let form = formVariable === "reg" ? <PopupForm permission={props.permission} isLoggedIn={props.isLoggedIn} errorReg={props.errorReg} addClient={props.addClient}/> : formVariable === "login" ? <PopupFormLogin permission={props.permission} isLoggedIn={props.isLoggedIn} error={props.error} onLogin={props.onLogin}/> : null

    return (
        <>
        {formVariable === 'reg' &&
        <div id="popup" style={props.popUp && props.classNameElement !== 'account' && !props.isLoggedIn ? visibility : null}>
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
        || formVariable === 'login' &&
        <div id="popup" style={props.popUp && props.classNameElement !== 'account' && !props.isLoggedIn ? visibility : null}>
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
        || formVariable === 'order' &&
        <div id="popup" style={props.orderId ? visibility : null}>
            <div className="popup-box">
                <div className="header" style={{boxShadow: 'none', border: 'none'}}>
                    <span onClick={props.popUpClose} className="popup-close"></span>
                    <h2>Спасибо!</h2>
                </div>
                <div className="content">
                    <PopupOrder settings={props.settings} orderId={props.orderId}/>
                </div>
            </div>
        </div> || formVariable === 'message' &&
        <div id="popup" style={props.messagePopup ? visibility : null}>
            <div className="popup-box">
                <div className="header" style={{boxShadow: 'none', border: 'none'}}>
                    <span data-title="message" onClick={props.popUpClose} className="popup-close"></span>
                    <h2>{!props.send && "Напишите менеджеру" || "Ваше сообщение отправлено!"}</h2>
                </div>
                <div className="content">
                    {!props.send && <PopupFormMessage onSendMessage={props.onSendMessage} clientId={props.clientId}/> || <PopupMessage settings={props.settings} />}
                </div>
            </div>
        </div>}
        </>
    )
}

export default Popup;
