import React from "react";
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import {rus as LanguageRus} from "../../Language";

const OrderShow = (props) => {
    console.log(props);
    return(
        <>
        <div className="title"><h1>{LanguageRus.page.orders.show.title}</h1></div>
        <div className="content">
            <Row>
                <Col col="md">
                    <div className={'title'}><h5>{LanguageRus.page.orders.show.order_detail.title}</h5></div>
                    <div className={'content'}>
                        <ListGroup>
                            <ListGroup.Item>Номер : №{props.order.order_id}</ListGroup.Item>
                            <ListGroup.Item>Дата : 21-07-2020</ListGroup.Item>
                            <ListGroup.Item>Тип : Квартальный</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
                <Col col="md">
                    <div className={'title'}><h5>{LanguageRus.page.orders.show.client.title}</h5></div>
                    <div className={'content'}>
                        <ListGroup>
                            <ListGroup.Item>ФИО : Альбертян Артем Петрович</ListGroup.Item>
                            <ListGroup.Item>Телефон : +79037188521</ListGroup.Item>
                            <ListGroup.Item>Организация : Офис на Курской</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
                <Col col="md">
                    <div className={'title'}><h5>{LanguageRus.page.orders.show.delivery.title}</h5></div>
                    <div className={'content'}>
                        <ListGroup>
                            <ListGroup.Item>Адрес доставки : г.Москва Воронежская 44-1-101</ListGroup.Item>
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
                            <th scope="col">Продукт</th>
                            <th scope="col">Цена за ед</th>
                            <th scope="col">Количество</th>
                            <th scope="col">Общая цена</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Флешка</td>
                            <td>450 руб.</td>
                            <td>2</td>
                            <td>900 руб.</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Флешка</td>
                            <td>450 руб.</td>
                            <td>2</td>
                            <td>900 руб.</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Флешка</td>
                            <td>450 руб.</td>
                            <td>2</td>
                            <td>900 руб.</td>
                        </tr>
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
                            <td>1900 руб.</td>
                        </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
            <Row>
                <Col col="md">
                    <div className={'title'}><h5>{LanguageRus.page.orders.show.comment.title}</h5></div>
                    <div className={'content'}>
                        <p>В рамках спецификации современных стандартов, некоторые особенности внутренней политики представляют собой
                        не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ограничены исключительно образом мышления!
                        А ещё диаграммы связей призваны к ответу. Повседневная практика показывает, что выбранный нами
                        инновационный путь, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества.</p>
                    </div>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default OrderShow;
