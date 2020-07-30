import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

const Links = (props) => {

    const [leftDropMenu, setLeftDropMenu] = useState(false);
    const [catId, setCatId] = useState(null);

    const leftDropMenuHandler = page => {

        setCatId(page);

        if (leftDropMenu) {
            setLeftDropMenu(false)
        } else {
            setLeftDropMenu(true)
        }

        props.leftDropMenuHandler(page)
    }

    let className = leftDropMenu ? "act" : "";

    let categories = props.categories ? props.categories.map((item, key) => {
        return  item.children.length ? <li className={'parent'} key={key}><NavLink onClick={() => leftDropMenuHandler(item.category_id)} className={`dropLeftNavigationRun ${catId === item.category_id ? className : ''}`} to={`/shop/${item.link}`} >{item.attributes.name}</NavLink><ul className={`dropLeftNavigation ${catId === item.category_id ? className : ''}`}>{ props.categories.map((it, key) => it.parent_id === item.category_id ? <li onClick={() => props.onPageHandler(it.category_id)} key={key}><NavLink to={it.link}>{it.attributes.name}</NavLink></li> : null)}</ul></li> : !item.parent_id ? <li onClick={() => props.onPageHandler(item.category_id)} key={key}><NavLink to={`/shop/${item.link}`} >{item.attributes.name}</NavLink></li> : null
    } ) : null;

    return (
        <>{categories}</>
    )
}

export default Links
