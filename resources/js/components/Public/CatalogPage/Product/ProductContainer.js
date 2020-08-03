import React, {Component, useState} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProduct} from "../../../../redux/Public/productPublic-reduser";
import {getProductSelectors, getInitializeSelectors} from "../../../../redux/Public/productPublic-selectors";
import Product from "./Product";
import Preloader from "../../../common/Preloader/Preloader";
import {getSettingsSelectors} from "../../../../redux/Public/public-selectors";
import {addCart,deleteCart} from "../../../../redux/Public/cart-reducer";



class AccountContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false
        }
    }

    componentDidMount() {
        this.props.getProduct(Number(this.props.productPage));
    }

    addCartHandler = (product) =>  {
        this.setState({isFetching: true})
        this.props.addCart(product);
        setTimeout(() => this.setState({isFetching: false}), 2000);
    }

    deleteCartHandler = (product) => {
        this.props.deleteCart(product)
    }


    render() {

        if (!this.props.initialize) {
            return <Preloader/>
        }

        return <Product
            key={this.props.product.product_id}
            isFetching={this.state.isFetching}
            product={this.props.product}
            productPage={this.props.match.params.id}
            onPageHandler={this.props.onPageHandler}
            dropLeftNavigationRun={this.props.dropLeftNavigationRun}
            leftDropMenuHandler={this.props.leftDropMenuHandler}
            categories={this.props.categories}
            fromQuarterlyDate={this.props.settings.from}
            toQuarterlyDate={this.props.settings.to}
            isLoggedIn={this.props.isLoggedIn}
            addCartHandler={this.addCartHandler}
            popUpOpen={this.props.popUpOpen}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        product: getProductSelectors(state),
        initialize: getInitializeSelectors(state),
        settings: getSettingsSelectors(state),
    }


};

export default compose(
    withRouter,
    connect(mapStateToProps, {getProduct, addCart, deleteCart})
)(AccountContainer);
