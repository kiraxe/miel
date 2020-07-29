import React from "react";
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import {rus as LanguageRus} from "../../Language";

const OrderShow = (props) => {
    let products = props.order[0] && props.order[0].cart.cart_to_product ? props.order[0].cart.cart_to_product.map((item, key) => <tr key={key}><th scope="row">{key + 1}</th><td>{item.order_detail.article}</td><td><img src={item.order_detail.image}/></td><td>{item.order_detail.product_name}</td><td>{item.order_detail.unit_price} руб.</td><td>2</td><td>{item.order_detail.total_price} руб.</td></tr>) : null
    return(
        <>
        <div className="title"><h1>{LanguageRus.page.orders.show.title}</h1></div>
            {props.order[0] &&
        <div className="content">
            <Row>
                <Col col="md">
                    <div className={'title'}><h5>{LanguageRus.page.orders.show.order_detail.title}</h5></div>
                    <div className={'content'}>
                        <ListGroup>
                            <ListGroup.Item>№ : {props.order[0].order_id}</ListGroup.Item>
                            <ListGroup.Item>Дата : {props.order[0].created_at}</ListGroup.Item>
                            <ListGroup.Item>Тип : {props.order[0].order_type.name}</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
                <Col col="md">
                    <div className={'title'}><h5>{LanguageRus.page.orders.show.client.title}</h5></div>
                    <div className={'content'}>
                        <ListGroup>
                            <ListGroup.Item>ФИО : {props.order[0].client.name}</ListGroup.Item>
                            <ListGroup.Item>Телефон : {props.order[0].client.phone}</ListGroup.Item>
                            <ListGroup.Item>Email : {props.order[0].client.email}</ListGroup.Item>
                            <ListGroup.Item>Организация : {props.order[0].client.company}</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
                <Col col="md">
                    <div className={'title'}><h5>{LanguageRus.page.orders.show.delivery.title}</h5></div>
                    <div className={'content'}>
                        <ListGroup>
                            <ListGroup.Item>{!props.order[0].cart.delivery ? `Адрес доставки : ${props.order[0].client.addressK}` : `Самовывоз: ${props.order[0].cart.delivery.address}`}</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col col="md">
                    <div className={'title'}><h5>{LanguageRus.page.orders.show.cart.title}</h5></div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">№</th>
                            <th scope="col">Артикул</th>
                            <th scope="col">Картинка</th>
                            <th scope="col">Продукт</th>
                            <th scope="col">Цена за ед</th>
                            <th scope="col">Количество</th>
                            <th scope="col">Общая цена</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products}
                        </tbody>
                    </table>
                    <table className="table" style={{width: '300px'}}>
                        <thead>
                        <tr>
                            <th scope="col">Итоговая стоимость</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{props.order[0].total} руб.</td>
                        </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
            <Row>
                <Col col="md">
                    <div className={'title'}><h5>{LanguageRus.page.orders.show.comment.title}</h5></div>
                    <div className={'content'}>
                        <p>{props.order[0].comment.comment}</p>
                    </div>
                </Col>
            </Row>
        </div>}
        </>
    )
}

export default OrderShow;
