import React from "react";


const Circle = (props) => {
    let style = {
        display: 'flex'
    }
    return (
        <div style={props.cart.length > 0 && style || {}} className="circle">
            <span>{props.cart.length}</span>
        </div>
    )
}

export default Circle;
