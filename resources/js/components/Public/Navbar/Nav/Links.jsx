import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {forEach} from "react-bootstrap/cjs/ElementChildren";

const Links = (props) => {


    let menuParams = {}


    useEffect(() => {
        if (props.categories) {
            props.categories.forEach((item, i) => {
                menuParams[item.category_id] = false;
            })
        }
    }, [])


    let menu  = JSON.parse(localStorage.getItem('menu'));


    const [leftDropMenu, setLeftDropMenu] = useState(menu ? menu : menuParams);

    const leftDropMenuHandler = (e, page) => {

        let clsName = e.target.getAttribute('class');
        let val = {}


        if (clsName !== 'menuArrow') {
            props.dropMenuClose();
            props.leftDropMenuHandler(page);
        } else {
            e.preventDefault();

            if (leftDropMenu[page]) {
                for (const [key, value] of Object.entries(leftDropMenu)) {
                    if (key == page) {
                        val[key] = false;
                    } else {
                        val[key] = value;
                    }
                }
                setLeftDropMenu(val)
            } else {
                for (const [key, value] of Object.entries(leftDropMenu)) {
                    if (key == page) {
                        val[key] = true;
                    } else {
                        val[key] = value;
                    }
                }
                setLeftDropMenu(val)
            }

            localStorage.removeItem('menu');
            localStorage.setItem('menu', JSON.stringify(val));
        }

    }

    let arrowStyle = {
        position: 'absolute',
        width: '15px',
        height: '15px',
        right: '15px',
        transform: 'translateY(-50%)',
        top: '50%',
        zIndex: '999'
    }

    let categories = props.categories ? props.categories.map((item, key) => {
        return  item.children.length > 0 ? <li className={'parent'} key={key}><NavLink onClick={(e) => leftDropMenuHandler(e, item.category_id)} activeClassName="act" className={`leftDropMenuRun ${leftDropMenu[item.category_id] ? "active" : ''}`} to={`/shop/${item.link}`} >{item.attributes.name}<span style={arrowStyle} className="menuArrow"></span></NavLink><ul className={`leftDropMenu ${leftDropMenu[item.category_id] ? "active" : ''}`}>{ props.categories.map((it, key) => it.parent_id === item.category_id ? <li key={key}><NavLink onClick={(e) => leftDropMenuHandler(e, item.category_id)} to={`/shop/${it.link}`} >{it.attributes.name}</NavLink></li> : null)}</ul></li> : !item.parent_id ? <li key={key}><NavLink onClick={(e) => leftDropMenuHandler(e, item.category_id)} to={`/shop/${item.link}`} >{item.category_id === 1 ? <span>ГК «МИЭЛЬ»</span> : ""} {item.attributes.name}</NavLink></li> : null
    } ) : null;

    return(
        <>
            {categories}
        </>
    )
}

export default Links;
