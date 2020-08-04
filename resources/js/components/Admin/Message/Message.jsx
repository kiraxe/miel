import React from "react";
import ButtonPanelContainer from "../../common/ButtonsPanel/ButtonPanelContainer";
import { rus as LanguageRus} from '../Language';

const Message = (props) => {
    let buttons = ['show', 'delete'];
    return (
        <tr>
            <td>{props.message.message_id}</td>
            <td>{props.message.message}</td>
            <td>{props.message.client.company}</td>
            <td>{props.message.client.name}</td>
            <td>{props.message.created_at}</td>
            <td><ButtonPanelContainer onDelete={props.onDelete} page={props.page} buttons={buttons} elementId={props.message.message_id}  url={props.url}/></td>
        </tr>
    )
};

export default Message;
