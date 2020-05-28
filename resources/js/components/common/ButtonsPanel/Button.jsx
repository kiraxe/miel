import React from "react";

let Button = (props) => {
    return (
        <button type="button" className={`btn ${props.type}`}>
            <i className={`fa ${props.icon}`} aria-hidden="true"></i>
        </button>
    )
};

export default Button;
