import React from "react";
import ReactHtmlParser from "react-html-parser";


const AccountOrders = (props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="block_2">
                    <div className="title"><h2>1. Проверьте заказ и выберите дату поставки</h2></div>
                    <div className="cart">
                        <div className="item">
                            <div className="itemPartFirst">
                                <div className="images"><img style={{width: '100px'}} src=""/></div>
                                <div className="content">
                                    <div className="itemTitle"><h2></h2></div>
                                    <div className="article">Арт. </div>
                                    <div className="itemText"><p style={{height: '52px',display: "inline-block", overflow: 'hidden'}}></p></div>
                                </div>
                            </div>
                            <div className="itemPartSecond">
                                <div className="costPanelItem">
                                    <div className="price">Итого: 2000 ₽</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountOrders;
