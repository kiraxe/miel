import React, {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";
import {deleteCart, editCart} from "../../../redux/Public/cart-reducer";
import Cart from '../CartPage/Cart/Cart';
import {getCartSelectors} from '../../../redux/Public/cart-selectros';
import {getSettingsSelectors} from "../../../redux/Public/public-selectors";


class AccountContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false
        }
    }

    componentDidMount() {

    }



    deleteCartHandler = (arrId) => {
        this.props.deleteCart(arrId);
    }

    editCartHandler = (product) => {
        this.props.editCart(product);
    }


    render() {

        /*if (!this.props.initialize) {
            return <Preloader/>
        }*/

        return <Cart editCartHandler={this.editCartHandler} deleteCartHandler={this.deleteCartHandler} settings={this.props.settings} cart={this.props.cart}/>
    }
}

let mapStateToProps = (state) => {
    return {
        cart: getCartSelectors(state),
        settings: getSettingsSelectors(state),
    }


};

export default compose(
    withRouter,
    connect(mapStateToProps, {deleteCart, editCart})
)(AccountContainer);
