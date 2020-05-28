import  React from 'react';
import ButtonPanelContainer from "../../common/ButtonsPanel/ButtonPanelContainer";
import { rus as LanguageRus} from '../Language';

const Client = (props) => {
    let buttons = ['edit', 'delete'];
    return (
        <tr>
            <td>{props.client.name}</td>
            <td>{props.client.email}</td>
            <td>{props.client.phone}</td>
            <td>{props.client.company}</td>
            <td>{props.client.addressK}</td>
            <td>{props.client.addressP}</td>
            <td>{props.client.inn}</td>
            <td>{props.client.kpp}</td>
            <td>{props.client.rs}</td>
            <td>{props.client.bik}</td>
            <td>{props.client.ks}</td>
            <td><ButtonPanelContainer page={props.page} buttons={buttons} elementId={props.client.id}  url={props.url}/></td>
        </tr>
    )
}

export default Client;
