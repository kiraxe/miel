import React, {useEffect, useState} from "react";
import Item from "./Item/Item";
import {forEach} from "react-bootstrap/cjs/ElementChildren";


const Cart = (props) => {

    const [totalPrice, setTotalPrice] = useState(0);

    let products = props.cart ? props.cart.map((item, key) => item ? <Item key={item.product_id} deleteCartHandler={props.deleteCartHandler} editCartHandler={props.editCartHandler} settings={props.settings} item={item} /> : null): null;

    let priceArr = props.cart ? props.cart.map((item, key) => item ? item.total : null): null;

    let price = 0;

    priceArr.forEach((item, i, arr) => {
        price += item;
    })

    useEffect(() => {
       setTotalPrice(price);
    });

    return (
        <div id="main-content">
            <div className="container-my">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block_1">
                            <div className="title"><h1>Корзина</h1></div>
                            <div className="text"><p>Осноной текст для текстовых блоков Осноной текст для текстовых
                                блоков Осноной текст для текстовых блоков Осноной текст для текстовых Осноной текст для
                                текстовых блоков Осноной текст для текстовых блоков Осноной текст для текстовых
                                блоков.</p></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="block_2">
                            <div className="title"><h2>1. Проверьте заказ и выберите дату поставки</h2></div>
                            <div className="cart">
                                {products}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="block_3">
                            <div className="title"><h2>2. Нужна ли доставка?</h2></div>
                            <div className="checkbox">
                                <div className="checkInput">
                                    <div className="checkInputItem">
                                        <input id="check1" type="checkbox" name="dateFirst"/>
                                            <label htmlFor="check1">Я заберу заказ сам по адресу Коломенский проезд, д.
                                                14</label>
                                    </div>
                                    <div className="checkInputItem">
                                        <input id="check2" type="checkbox" name="dateSecond"/>
                                            <label htmlFor="check2">Мне нужна доставка* по моему адресу (от 500
                                                ₽)</label>
                                            <p>здесь указывается адрес для курьерской доставки из личного кабинета</p>
                                    </div>
                                    <div className="checkInputItem">
                                        <input id="check3" type="checkbox" name="dateFirst"/>
                                            <label htmlFor="check3">Другой адрес</label>
                                            <p>здесь указывается другой адрес для курьерской доставки</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text">
                                <p>* Точную стоимость доставки узнайте у вашего менеджера по телефону: <a
                                    href="tel:+79037792854">+7 (903) 779-28-54</a> или по e-mail: <a
                                    href="mailto:suvenir@miel.ru">suvenir@miel.ru</a></p>
                            </div>
                            <div className="textarea">
                                <p>Комментарий к заказу</p>
                                <textarea placeholder="Введите текст комментария"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="block_4">
                            <div className="title"><h2>3. Подтвердите заказ</h2></div>
                            <div className="price">
                                <p>Общая сумма заказа:  <span> {totalPrice} ₽</span></p>
                            </div>
                            <div className="button">
                                <button>Подтвердить заказ</button>
                                <p>Нажимая «Сохранить», я соглашаюсь с <span>офертой</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
