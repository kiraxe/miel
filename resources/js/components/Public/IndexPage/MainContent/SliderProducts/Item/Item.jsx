import React from "react";
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";


const Item = (props) => {
    let link = props.attributes.map(item => !props.attributes.parent_id ? props.attributes.link : "");
    return (<NavLink className="productNavLink item" key={key} to={`/shop/${link[0]}/${props.product_id}`}>
        <div className="itemContainer">
            <div className="images"><img src={props.item.image} alt="prod" title="pen"/></div>
            <div className="content">
                <div className="title"><h2>{props.item.name}</h2></div>
                <div className="article"><p>Арт. {props.item.article}</p></div>
                <div className="text">
                    <p>{ReactHtmlParser(props.item.detail)}</p>
                </div>
            </div>
            <div className="costPanel">
                <div className="cost"><p>{props.item.price} ₽ / шт.</p></div>
                <div className="count">
                    <div className="remove"><img src="/images/minus.png"/></div>
                    <div className="number">50</div>
                    <div className="add"><img src="/images/plus.png"/></div>
                </div>
            </div>
            <div className="button">
                {props.isLoggedIn && <button>Корзина</button> || <button>Корзина()</button> }
            </div>
        </div>
    </NavLink>)
}

export default Item
