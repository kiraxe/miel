import React from "react";
import {NavLink} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";


const Item = (props) => {

    const element = (item, key) => {
        let link = item.attributes.map(item => !item.attributes.parent_id ? item.attributes.link : "");

        return <NavLink className="productNavLink item col-sm-6 col-md-4" key={key} to={`/shop/${link[0]}/${item.product_id}`}>
            <div className="itemContainer">
                <div className="images"><img src={item.image} alt="prod" title="pen"/></div>
                <div className="content">
                    <div className="title"><h2>{item.name}</h2></div>
                    <div className="article"><p>Арт. {item.article}</p></div>
                    <div className="text">
                        <p>{ReactHtmlParser(item.detail)}</p>
                    </div>
                </div>
                <div className="costPanel">
                    <div className="cost"><p>{item.price} ₽ / шт.</p></div>
                    <div className="count">
                        <div className="remove"><img src="/images/minus.png"/></div>
                        <div className="number">50</div>
                        <div className="add"><img src="/images/plus.png"/></div>
                    </div>
                </div>
                <div className="button">
                    {props.isLoggedIn && <button>Корзина</button> || <button>Корзина()</button>}
                </div>
            </div>
        </NavLink>
    }

    let products = props.products ? props.products.map((item, key) => element(item, key)) : null;

    return (
        <>{products}</>
    )
}

export default Item;
