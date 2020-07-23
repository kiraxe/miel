import React from "react";


const Title = (props) => {
    let tl = props.title ? props.title.join(' ') : null;
    return (
        <div className="row">
            <div className="col-md-12 title-container">
                <div className="title"><h1>{props.titleSecond ? props.titleSecond : null} <span>{tl}</span></h1></div>
            </div>
        </div>
    )
}

export default Title;
