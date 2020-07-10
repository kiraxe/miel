import React from "react";

const Item = () => {
    return(
        <div className="item">
            <div className="itemContainer">
                <div className="images"><img src="images/prod.jpg" alt="prod" title="pen"/></div>
                <div className="content">
                    <div className="title"><h2>Ручка автоматическая Senator</h2></div>
                    <div className="article"><p>Арт. 156884</p></div>
                    <div className="text">
                        <p>
                            Краткое описание товара,<br/>
                            не более чем на две строчки
                        </p>
                    </div>
                </div>
                <div className="costPanel">
                    <div className="cost"><p>18 ₽ / шт.</p></div>
                    <div className="count">
                        <div className="remove"><img src="images/minus.png"/></div>
                        <div className="number">50</div>
                        <div className="add"><img src="images/plus.png"/></div>
                    </div>
                </div>
                <div className="button">
                    <button>Корзина</button>
                </div>
            </div>
        </div>
    )
}

export default Item;
