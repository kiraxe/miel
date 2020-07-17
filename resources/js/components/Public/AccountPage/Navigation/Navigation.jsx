import React from "react";
import { NavLink} from 'react-router-dom';


const Navigation = (props) => {
    return (
        <div className="row">
            <nav>
                <ul className="leftNavigation">
                    <li><NavLink to="/account/company_data">Данные
                        компании</NavLink></li>
                    <li><NavLink to="/account/orders">Заказы</NavLink></li>
                    <li><NavLink to="/account/archive">Архив</NavLink></li>
                    <li><NavLink to="/account/accounting">Бухгалтерия</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;
