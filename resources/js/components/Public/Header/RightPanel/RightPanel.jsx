import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import Circle from "./Circle";


const RightPanel = (props) => {

    const [accountMenu, setAccountMenu] = useState(false);

    const accountMenuHandler = (e) => {
        let name = e ? e.target.getAttribute('class'): null;
        if (name === 'login' || name === 'loginSpan') {
            setAccountMenu(true);
        } else {
            setAccountMenu(false);
        }
    }

    useEffect(() => {
        if (!props.menuAccount) {
            setAccountMenu(false);
        }
    })

    let style = {
        display: 'block'
    }

    return (
        <div className="col-xl-6 col-md-4 col-sm-4 col-5 right-panel">
            <div className="row justify-content-end">
                <div><a className="phone" href={`tel:${props.phone}`}><span>{props.phone}</span></a></div>
                <div style={{position: 'relative'}}>{ props.isLoggedIn && props.permission === "Client"
                && <>
                   <a onClick={accountMenuHandler} className="login" href="#"><span className='loginSpan'>Кабинет</span></a>
                   <ul style={accountMenu && style || {}} className="accountMenu">
                        <li><NavLink onClick={accountMenuHandler} to="/account/company_data">Личные данные</NavLink></li>
                        <li><a onClick={() => {props.onLogout(); accountMenuHandler(); }} href="#">Выход</a></li>
                   </ul>
                   </>
                || props.isLoggedIn && props.permission === "Admin" && <NavLink className="login" to={'/admin'}><span>Админ-панель</span></NavLink> || <a onClick={props.popUpOpen} className="login" href="#"><span>Вход</span></a>
                }</div>
                <div style={{position: 'relative'}}><NavLink className="cart" to="/basket"><span>Корзина</span></NavLink><Circle cart={props.cart}/></div>
            </div>
        </div>
    )
}

export default RightPanel;
