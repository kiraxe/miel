import React from "react";
import Button from "./Button";
import {NavLink} from "react-router-dom";


let ButtonPanel = (props) => {
    let buttons = props.buttons.map( (b, index) => {
        let link = b === "edit" ? props.url + "/" + b + "/" + props.elementId :
                   b === 'add' ? props.url + "/" + b : null;
        return b === "edit" ? <li key={index} ><NavLink  to={`${link}`}><Button type={'btn-success'} icon={'fa-pencil-square-o'}/></NavLink></li> :
               b === 'delete' ? <li key={index} data-page={props.page} data-element={props.elementId} onClick={props.delete} ><Button type={'btn-danger'} icon={'fa-times'}/></li> :
               b === 'add' ? <li key={index} ><NavLink to={`${link}`}><Button type={'btn-primary'} icon={'fa-plus'}/></NavLink></li> : null;

    });
    return (
        <ul className='buttonPanel'>
            {buttons}
        </ul>
    )
}

export default ButtonPanel;
