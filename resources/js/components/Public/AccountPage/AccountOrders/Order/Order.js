import React from "react";
import Item from "../Item/Item";


const Order = (props) => {
    let products = props.order.cart.cart_to_product ? props.order.cart.cart_to_product.map((item, key) => <Item key={key} product={item.order_detail}/>) : null;
    return (
        <div className="row accountOrders">
            <div className="accountOrders__title col-md-12">
                <h2>Заказ {props.order.order_id} от {props.order.created_at}</h2>
            </div>
            <div className="accountOrders__content col-md-12">
                {products}
            </div>
            <div className="accountOrders__total col-md-12">
                <p>Общая сумма заказа: <span> {props.order.total} ₽</span></p>
            </div>
        </div>
    )
}

export default Order;
