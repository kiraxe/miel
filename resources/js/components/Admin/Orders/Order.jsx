import React from "react";
import ButtonPanelContainer from "../../common/ButtonsPanel/ButtonPanelContainer";
import { rus as LanguageRus} from '../Language';

const Order = (props) => {
    let buttons = ['show'];
    return (
        <tr>
            <td>{props.order.order_id}</td>
            <td><ButtonPanelContainer onDelete={props.onDelete} page={props.page} buttons={buttons} elementId={props.order.order_id}  url={props.url}/></td>
        </tr>
    )
};

export default Order;
