import React, { Component} from 'react';
import Products from "./Products";
import ProductEdit from "./ProductEdit/ProductEdit";
import ProductNew from "./ProductNew/ProductNew";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getProducts, addProduct, editProduct} from "../../../redux/products-reducer"


class ProductsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isFetching: false}
        this.timerFetching = null;
    }

    componentDidMount() {
        this.props.getProducts();
    }

    componentWillUnmount() {
        clearTimeout(this.timerFetching);
    }

    onAddSubmit = (formData) => {
        this.setState({isFetching: true});
        this.props.addProduct(formData);
        setTimeout(() => {this.setState({isFetching: false})}, 2000);
    }

    onEditSubmit = (formData) => {
        this.setState({isFetching: true});
        this.props.editProduct(formData);
        setTimeout(() => {this.setState({isFetching: false})}, 2000);
    }

    render() {
        let product = !this.props.match.params.slug ? <Products page={this.props.match.params.page} url={this.props.match.url} products={this.props.products}/> :
                       this.props.match.params.slug === 'edit' && this.props.match.params.id ?  <ProductEdit isFetching={this.state.isFetching} editProduct={this.onEditSubmit} product={this.props.products ? this.props.products.filter(item => item.id == this.props.match.params.id ) : null}/> :
                       this.props.match.params.slug === 'add' ? <ProductNew isFetching={this.state.isFetching} addProduct={this.onAddSubmit}/> : null;

        return (
            <>
                {product}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.productsAdmin.products,
        error: state.productsAdmin.error,
    }
};


export default compose(
    connect(mapStateToProps, {getProducts, addProduct, editProduct}),
    withRouter,
)(ProductsContainer);
