import React, {useEffect, useState} from "react";
import Item from "./Item/Item";
import loading from "../../../../assets/images/loading.svg";


const Cart = (props) => {

    const [dateFirst, setDateFirst] = useState(true);
    const [dateSecond, setDateSecond] = useState(false);

    const [totalPrice, setTotalPrice] = useState(0);

    let products = props.cart ? props.cart.map((item, key) => item ? <Item key={item.product_id} deleteCartHandler={props.deleteCartHandler} editCartHandler={props.editCartHandler} settings={props.settings} item={item} /> : null): null;

    let priceArr = props.cart ? props.cart.map((item, key) => item ? item.total : null): null;

    let price = 0;

    priceArr.forEach((item, i, arr) => {
        price += item;
    })

    useEffect(() => {
        props.delivery ? props.onDeliveryHandler(props.delivery) : props.onDeliveryHandler(1) ;
    }, [])

    useEffect(() => {
       setTotalPrice(price);
       if (props.delivery === null ) {
           setDateSecond(true);
           setDateFirst(false);
       }
    });

    useEffect(() => {
        props.onTotalHandler(price);
    }, [price]);

    let onCheckboxHandler = (e) => {
        let delivery = 1;
        if (e.target.name === "dateFirst") {
            setDateFirst(true);
            setDateSecond(false)
        } else if (e.target.name === "dateSecond") {
            setDateSecond(true)
            setDateFirst(false);
            delivery = null;
        }

        props.onDeliveryHandler(delivery);
    }


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
                                        <input onChange={onCheckboxHandler} id="check1" type="checkbox" checked={dateFirst} name="dateFirst"/>
                                            <label htmlFor="check1">Я заберу заказ сам по адресу Коломенский проезд, д.
                                                14</label>
                                    </div>
                                    <div className="checkInputItem">
                                        <input onChange={onCheckboxHandler} id="check2" type="checkbox" checked={dateSecond} name="dateSecond"/>
                                            <label htmlFor="check2">Мне нужна доставка* по моему адресу (от 500
                                                ₽)</label>
                                            <p>здесь указывается адрес для курьерской доставки из личного кабинета</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text">
                                <p>* Точную стоимость доставки узнайте у вашего менеджера по телефону: <a
                                    href={`tel:${props.settings.phone_manager}`}>{props.settings.phone_manager}</a> или по e-mail: <a
                                    href={`mailto:${props.settings.manager_email}`}>{props.settings.manager_email}</a></p>
                            </div>
                            <div className="textarea">
                                <p>Комментарий к заказу</p>
                                <textarea onChange={props.onCommentHandler} placeholder="Введите текст комментария" value={props.comment ? props.comment : ""}></textarea>
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
                                {products.length > 0 && <button onClick={props.onSendOrderHandler}>Подтвердить заказ {props.isFetching ? <img style={{width: '20px'}} src={loading}/> : null}</button> || <button disabled>Подтвердить заказ</button>}
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
