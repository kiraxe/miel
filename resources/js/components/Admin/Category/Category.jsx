import React from "react";
import ButtonPanelContainer from "../../common/ButtonsPanel/ButtonPanelContainer";
import { rus as LanguageRus} from '../Language';

const Category = (props) => {
    let buttons = ['edit','delete'];
    return (
        <tr>
            <td>{props.category.category_id}</td>
            <td>{props.category.image && <img src={props.category.image}/> || <img src={"/storage/no-image.jpg"}/>}</td>
            <td>{props.category.attributes.name}</td>
            <td>{props.category.parentNames}</td>
            <td><ButtonPanelContainer onDelete={props.onDelete} page={props.page} buttons={buttons} elementId={props.category.category_id}  url={props.url}/></td>
        </tr>
    )
};

export default Category;
