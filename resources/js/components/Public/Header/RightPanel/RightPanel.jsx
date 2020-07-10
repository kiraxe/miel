import React from "react";


const RightPanel = (props) => {
    return (
        <div className="col-xl-6 col-md-4 col-sm-4 col-5 right-panel">
            <div className="row justify-content-end">
                <div><a className="phone" href="tel:+78005001990"><span>8 (800) 500-19-90</span></a></div>
                <div><a className="login" href="#"><span>Вход</span></a></div>
                <div><a className="cart" href="#"><span>Корзина</span></a></div>
            </div>
        </div>
    )
}

export default RightPanel;
