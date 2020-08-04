import React from "react";
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import {rus as LanguageRus} from "../../Language";

const MessageShow = (props) => {
    return(
        <>
            <div className="title"><h1>{LanguageRus.page.messages.show.title}</h1></div>
            {props.message[0] &&
            <div className="content">
            <Row>
                <Col col="md">
                    <div className={'title'}><h5>{LanguageRus.page.messages.show.client.title}</h5></div>
                    <div className={'content'}>
                        <ListGroup>
                            <ListGroup.Item>№ : {props.message[0].message_id} </ListGroup.Item>
                            <ListGroup.Item>ФИО : {props.message[0].client.name} </ListGroup.Item>
                            <ListGroup.Item>Компания : {props.message[0].client.company} </ListGroup.Item>
                            <ListGroup.Item>Телефон : {props.message[0].client.phone} </ListGroup.Item>
                            <ListGroup.Item>Email : {props.message[0].client.email}</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col col="md">
                    <div className={'title'}><h5>{LanguageRus.page.messages.show.message.title}</h5></div>
                    <div className={'content'}>
                        <p>{props.message[0].message}</p>
                    </div>
                </Col>
            </Row>
            </div>}
        </>
    )
}

export default MessageShow;
