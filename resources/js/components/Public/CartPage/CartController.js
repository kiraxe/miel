import React, {Component, useState} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {deleteCart, editCart, setQuarterly, setComment, setDelivery} from "../../../redux/Public/cart-reducer";
import Cart from '../CartPage/Cart/Cart';
import {getCartSelectors, getClientSelectors, getCommentSelectors, getDeliverySelectors} from '../../../redux/Public/cart-selectros';
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

        let value = false;

        if (currentDate < from || currentDate > to ) {
            value = false;
        } else {
            value = true;
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

    render() {
        return <Cart delivery={this.props.delivery} comment={this.state.textarea} client={this.props.client} onDeliveryHandler={this.onDeliveryHandler} onCommentHandler={this.onCommentHandler} editCartHandler={this.editCartHandler} deleteCartHandler={this.deleteCartHandler} settings={this.props.settings} cart={this.props.cart}/>
    }
}

let mapStateToProps = (state) => {
    return {
        cart: getCartSelectors(state),
        settings: getSettingsSelectors(state),
        client: getClientSelectors(state),
        comment: getCommentSelectors(state),
        delivery: getDeliverySelectors(state)
    }


};

export default compose(
    withRouter,
    connect(mapStateToProps, {deleteCart, editCart, setQuarterly, setComment, setDelivery})
)(AccountContainer);
