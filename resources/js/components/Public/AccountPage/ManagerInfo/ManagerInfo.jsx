import React, {useState, useEffect} from "react";
import Button from "./Button";

const ManagerInfo = (props) => {

    return (
        <div className="row">
            <div className="contact col-md-12">
                <p><a className="phone" href={`tel:${props.settings.phone_manager}`}>{props.settings.phone_manager}</a></p>
                <p className="time">{props.settings.worktime}</p>
                <p className="manager">Ваш менеджер: {props.settings.manager_name} <br/>
                    <a href={`mailto: ${props.settings.manager_email}`}>{props.settings.manager_email}</a></p>
            </div>
            <Button popUpOpen={props.popUpOpen} />
        </div>
    )
}


export default ManagerInfo;
