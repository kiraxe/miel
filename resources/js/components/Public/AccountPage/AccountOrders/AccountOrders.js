import React from "react";
import Order from './Order/Order';
import ReactHtmlParser from "react-html-parser";

const AccountOrders = (props) => {

    let orders = props.orders ? props.orders.map((item, key) => <Order key={key} order={item} />) : null;
    return (
        <>
        {orders}
        </>
    )
}

export default AccountOrders;
