import React, {useState, useEffect} from "react";
import Navigation from "../Navigation/Navigation";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const Product = (props) => {

    let title = props.product && props.product.length > 0 ? props.product[0].name.split(' ') : null;
    let titleSecond = title ? title.shift() : null;

    return (
        <>
        {title &&
        <div id="main-content">
            <div className="container-my hidden-title">
                <div className="row">
                    <div className="col-md-12 title-container">
                        <div className="title"><h1>{titleSecond ? titleSecond : null} <span>{title ? title.join(' ') : null}</span></h1></div>
                    </div>
                </div>
            </div>
            <div className="container-my">
                <div className="row">
                    <div className="col-lg-3 col-xl-3 left">
                        <div className="container-my">
                            <div className="row">
                                <Navigation onPageHandler={props.onPageHandler} dropLeftNavigationRun={props.dropLeftNavigationRun} leftDropMenuHandler={props.leftDropMenuHandler} categories={props.categories}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-xl-9 center">
                        <div className="container-my">
                            <div className="row productCard">
                                <div className="col-md-6 col-lg-5 productCardSliderContent">
                                    <div className="productCardImage">
                                        <div className="productCardImageFrame" attr-border="5">
                                            <img src="/images/flesh.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-7 productCardContent">
                                    <div className="info">
                                        <div className="title"><h1>{titleSecond ? titleSecond : null} <span>{title ? title.join(' ') : null}</span></h1></div>
                                        <div className="article">Арт. {props.product[0].article}</div>
                                        <div className="description">
                                            <h2>Описание товара</h2>
                                            <p>{ReactHtmlParser(props.product[0].detail)}</p>
                                        </div>
                                        <div className="property">
                                            <h2>Характеристики товара</h2>
                                            <p>
                                                {ReactHtmlParser(props.product[0].property)}
                                            </p>
                                        </div>
                                        <div className="form">
                                            <h2>Заказать товар</h2>
                                            <form name="formCart" action="" methos="post">
                                                <div className="selectContainer">
                                                    <div className="select">
                                                        <input className="select__input" type="hidden" name="size"/>
                                                            <div className="select__head">Размер: <span></span></div>
                                                            <ul className="select__list" style={{display: 'none'}}>
                                                                <li className="select__item">M</li>
                                                                <li className="select__item">L</li>
                                                                <li className="select__item">X</li>
                                                            </ul>
                                                    </div>
                                                    <div className="select">
                                                        <input className="select__input" type="hidden" name="color"/>
                                                            <div className="select__head">Цвет: <span></span></div>
                                                            <ul className="select__list" style={{display: 'none'}}>
                                                                <li className="select__item">Красный</li>
                                                                <li className="select__item">Зеленый</li>
                                                                <li className="select__item">Синий</li>
                                                            </ul>
                                                    </div>
                                                </div>
                                                <div className="costPanel">
                                                    <div className="cost"><p>18 ₽ / шт.</p></div>
                                                    <div className="count">
                                                        <input className="costPanel__hidden" type="hidden"
                                                               name="count"/>
                                                        <div className="remove"><img src="/images/minus.png"/>
                                                        </div>
                                                        <div className="number">50</div>
                                                        <div className="add"><img src="/images/plus.png"/></div>
                                                    </div>
                                                </div>
                                                <div className="total">
                                                    <input className="total__hedden" type="hidden" name="total"/>
                                                    <p>Итого: <span>15 800</span> ₽</p>
                                                </div>
                                                <div className="button">
                                                    <button>Добавить в корзину</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> || null}
        </>
    )
}

export default Product
