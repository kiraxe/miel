import React from "react";

const Button = (props) => {
    return (
        <div className="button col-md-12">
            <button data-title="message" onClick={props.popUpOpen}>Напишите менеджеру</button>
        </div>
    )
}

export default Button;
