import React from "react";
import ButtonPanelContainer from "../../common/ButtonsPanel/ButtonPanelContainer";
import { rus as LanguageRus} from '../Language';

const Order = (props) => {
    let buttons = ['show', 'delete', 'edit'];

    return (
        <tr>
            <td>{props.order.order_id}</td>
            <td>{props.order.client.company}</td>
            <td>{props.order.status ? "Активный заказ" : "Заказ закрыт"}</td>
            <td>{props.order.order_type.name}</td>
            <td>{props.order.total}</td>
            <td>{props.order.created_at}</td>
            <td><ButtonPanelContainer onDelete={props.onDelete} page={props.page} buttons={buttons} elementId={props.order.order_id}  url={props.url}/></td>
        </tr>
    )
};

export default Order;
