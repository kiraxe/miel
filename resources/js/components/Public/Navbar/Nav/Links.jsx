import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";

const Links = (props) => {

    const [leftDropMenu, setLeftDropMenu] = useState(props.leftDropMenu);

    useEffect(() => {
        setLeftDropMenu(props.leftDropMenu);
    });

    let className = leftDropMenu ? "active" : "";

    let categories = props.categories ? props.categories.map((item, key) => {
        return  item.children.length > 0 ? <li key={key}><NavLink onClick={props.leftDropMenuHandler} activeClassName="act" className={`leftDropMenuRun ${className}`} to={`/shop/${item.link}`} ><span>ГК «МИЭЛЬ»</span> {item.attributes.name}</NavLink><ul className={`leftDropMenu ${className}`}>{ props.categories.map((it, key) => it.parent_id === item.category_id ? <li key={key}><NavLink to={it.link} >{it.attributes.name}</NavLink></li> : null)}</ul></li> : !item.parent_id ? <li key={key}><NavLink to={`/shop/${item.link}`} >{item.attributes.name}</NavLink></li> : null
    } ) : null;

    return(
        <>
            {categories}
        </>
    )
}

export default Links;
