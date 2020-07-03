import  React from 'react';
import ButtonPanelContainer from "../../common/ButtonsPanel/ButtonPanelContainer";
import { rus as LanguageRus} from '../Language';

const Option = (props) => {
    let buttons = ['edit', 'delete'];
    return (
        <tr>
            <td>{props.option.option_id}</td>
            <td>{props.option.description.name}</td>
            <td>{props.option.type}</td>
            <td><ButtonPanelContainer onDelete={props.onDelete} page={props.page} buttons={buttons} elementId={props.option.option_id}  url={props.url}/></td>
        </tr>
    )
}

export default Option;
