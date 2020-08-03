import React, {useState, useEffect} from "react";
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

        props.leftDropMenuHandler(page);

    }

    let className = leftDropMenu ? "active" : "";

    let categories = props.categories ? props.categories.map((item, key) => {
        return  item.children.length > 0 ? <li className={'parent'} key={key}><NavLink onClick={() => leftDropMenuHandler(item.category_id)} activeClassName="act" className={`leftDropMenuRun ${catId === item.category_id ? className : ''}`} to={`/shop/${item.link}`} >{item.attributes.name === "Каталог" && <span>ГК «МИЭЛЬ»</span>} {item.attributes.name}</NavLink><ul className={`leftDropMenu ${catId === item.category_id ? className : ''}`}>{ props.categories.map((it, key) => it.parent_id === item.category_id ? <li key={key}><NavLink to={`/shop/${it.link}`} >{it.attributes.name}</NavLink></li> : null)}</ul></li> : !item.parent_id ? <li key={key}><NavLink to={`/shop/${item.link}`} >{item.attributes.name}</NavLink></li> : null
    } ) : null;

    return(
        <>
            {categories}
        </>
    )
}

export default Links;
