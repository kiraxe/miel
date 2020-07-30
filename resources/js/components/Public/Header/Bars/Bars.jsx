import React from "react";

const Bars = (props) => {
    return (
        <div onClick={props.dropMenuHandler} className="col-xl-6 col-md-4 col-sm-4 col-2 bars">
            <a href="#"><img src="/images/bars.svg"/></a>
        </div>
    )
}

export default Bars;
