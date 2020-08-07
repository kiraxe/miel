import React from "react";

const Item = (props) => {
    return (
        <div className="accountOrders__item">
            <div className="accountOrders__image col-md-2"><img src={props.product.image}/></div>
            <div className="accountOrders__block col-md-4">
                <div className="accountOrders__blockTitle">
                    <h2>{props.product.name}</h2>
                </div>
                <div className="accountOrders__blockArticle">
                    <p>Арт. {props.product.article}</p>
                </div>
            </div>
            <div className="accountOrders__price col-md-3">
                <p>Цена за штуку: {props.product.unit_price} ₽ / шт.</p>
                <p>Количество: {props.product.count}</p>
            </div>
            <div className="accountOrders__priceTotal col-md-3">
                <p>Итого: {props.product.total_price} ₽</p>
            </div>
        </div>
    )
}

export default Item;
