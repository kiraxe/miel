import React from "react";
import {NavLink} from 'react-router-dom';

const MenuItem = (props) => {

    return (
        <nav>
            {props.categories ? props.categories.map((item, key) => item.main_menu ? <div key={key} className="menu-item"><div style={{backgroundImage: `url(${item.image})`}}><NavLink to={`shop/${item.link}`}><p className="title">{item.attributes.name}</p><p className="text">{item.attributes.description}</p></NavLink></div></div> : null) : null}
        </nav>
            )
}

export default MenuItem;
