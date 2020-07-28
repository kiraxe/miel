import React, {Component, useState} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {deleteCart, editCart, setQuarterly, setComment, setDelivery, sendOrder, setTotal} from "../../../redux/Public/cart-reducer";
import Cart from '../CartPage/Cart/Cart';
import {getCartSelectors, getClientSelectors, getCommentSelectors, getDeliverySelectors, getTotalSelectors} from '../../../redux/Public/cart-selectros';
import {getSettingsSelectors} from "../../../redux/Public/public-selectors";
import {getCurrentDate, replaceStr} from "../../../utils/GetCurrentData";


class AccountContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            textarea: this.props.comment
        }
    }

    componentDidMount() {

        let from = new Date(replaceStr(this.props.settings.from, '-', '/'));
        let to = new Date(replaceStr(this.props.settings.to, '-', '/'));
        let currentDate = new Date(getCurrentDate());

        let value = 2;

        if (currentDate < from || currentDate > to ) {
            value = 2;
        } else {
            value = 1;
        }

        this.props.setQuarterly(value);
    }

    deleteCartHandler = (arrId) => {
        this.props.deleteCart(arrId);
    }

    editCartHandler = (product) => {
        this.props.editCart(product);
    }

    onCommentHandler = (e) => {
        this.props.setComment(e.target.value)
        this.setState({
            textarea: e.target.value
        })
    }

    onDeliveryHandler = (delivery) => {
        this.props.setDelivery(delivery);
    }

    onTotalHandler = (total) => {
        this.props.setTotal(total);
    }

    onSendOrderHandler = () => {
        let forData = new FormData()
        let order = this.props.order;

        for(let key in order) {
            if (key !== 'error') {
                if (key === 'client' || key === 'cart') {
                    forData.append(key, JSON.stringify(order[key]));
                } else {
                    forData.append(key, order[key]);
                }
            }
        }

        this.setState({isFetching: true})
        this.props.sendOrder(forData);
        setTimeout(() => this.setState({isFetching: false}), 1000);
    }

    render() {
        return <Cart onTotalHandler={this.onTotalHandler} isFetching={this.state.isFetching} onSendOrderHandler={this.onSendOrderHandler} total={this.props.total} delivery={this.props.delivery} comment={this.state.textarea} client={this.props.client} onDeliveryHandler={this.onDeliveryHandler} onCommentHandler={this.onCommentHandler} editCartHandler={this.editCartHandler} deleteCartHandler={this.deleteCartHandler} settings={this.props.settings} cart={this.props.cart}/>
    }
}

let mapStateToProps = (state) => {
    return {
        order: state.cartPublic,
        cart: getCartSelectors(state),
        settings: getSettingsSelectors(state),
        client: getClientSelectors(state),
        comment: getCommentSelectors(state),
        delivery: getDeliverySelectors(state),
        total: getTotalSelectors(state)
    }


};

export default compose(
    withRouter,
    connect(mapStateToProps, {deleteCart, editCart, setQuarterly, setComment, setDelivery, sendOrder, setTotal})
)(AccountContainer);
