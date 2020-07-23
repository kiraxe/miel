import React from "react";

const Image = (props) => {
    return (
        <div className="col-md-6 col-lg-5 productCardSliderContent">
            <div className="productCardImage">
                <div className="productCardImageFrame" attr-border="5">
                    <img src={props.image}/>
                </div>
            </div>
        </div>
    )
}

export default Image;
