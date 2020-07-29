import React from "react";


const PopupOrder = (props) => {
    return (
        <>
            <p>Ваш заказ <span>№ {props.orderId}</span> принят.</p>
            <p>В ближайшее время с вами свяжется менеджер.  Если у вас возникли какие-либо вопросы, вы можете связаться с нами по телефону <a href={`tel:${props.settings.phone_manager}`}>{props.settings.phone_manager}</a> или по e-mail: <a href={`mailto:${props.settings.manager_email}`}>{props.settings.manager_email}</a>.</p>
        </>
    )
}

export default PopupOrder;
