import React, {useState, useEffect} from "react";
import Item from "../Item/Item";


const Order = (props) => {
    let products = props.order.cart.cart_to_product ? props.order.cart.cart_to_product.map((item, key) => <Item key={key} product={item.order_detail}/>) : null;

    const [load, setLoad] = useState(false);

    let loadHandler = () => {

        if (load) {
            setLoad(false);
        } else {
            setLoad(true);
        }

    }

    return (
        <div className="row accountOrders">
            <div className="accountOrders__title col-md-12">
                <h2>Заказ {props.order.order_id} от {props.order.created_at}</h2>
            </div>
            <div className="accountOrders__content col-md-12">
                {load && products || products[0]}
                {products.length > 1 && <a style={{color: '#F37021'}} className="loadOrderAccount" onClick={loadHandler} href="#">{ !load && 'Показать еще' || 'Убрать'}</a>}
            </div>
            <div className="accountOrders__total col-md-12">
                <p>Общая сумма заказа: <span> {parseFloat(props.order.total)} ₽</span></p>
            </div>
        </div>
    )
}

export default Order;
