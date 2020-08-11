import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

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
        return  item.children.length ? <li className={'parent'} key={key}><NavLink onClick={(e) => leftDropMenuHandler(e, item.category_id)} className={`dropLeftNavigationRun ${leftDropMenu[item.category_id] ? "act" : ''}`} to={`/shop/${item.link}`} >{item.attributes.name}<span style={arrowStyle} className="menuArrow"></span></NavLink><ul className={`dropLeftNavigation ${leftDropMenu[item.category_id] ? "act" : ''}`}>{ props.categories.map((it, key) => it.parent_id === item.category_id ? <li onClick={() => props.onPageHandler(it.category_id)} key={key}><NavLink to={`/shop/${it.link}`}>{it.attributes.name}</NavLink></li> : null)}</ul></li> : !item.parent_id ? <li onClick={() => props.onPageHandler(item.category_id)} key={key}><NavLink to={`/shop/${item.link}`} >{item.attributes.name}</NavLink></li> : null
    }) : null;

    return (
        <>{categories}</>
    )
}

export default Links
