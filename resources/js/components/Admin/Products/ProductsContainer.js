import React, { Component} from 'react';
import Products from "./Products";
import ProductEdit from "./ProductEdit/ProductEdit";
import ProductNew from "./ProductNew/ProductNew";
import Paginator from '../../common/Paginator/Paginator';
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getProducts, addProduct, editProduct} from "../../../redux/products-reducer"
import {getProductsSelectors, getErrorSelector, getPaginatorSelector} from "../../../redux/product-selectors";



class ProductsContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProducts(1);
    }

    onAddSubmit = (formData) => {
        this.props.addProduct(formData);
    }

    onEditSubmit = (formData) => {
        this.props.editProduct(formData);
    }

    onGetPageProducts = (e) => {
        let page = e.target.getAttribute('page');
        this.props.getProducts(page);
    }

    render() {
        let product = !this.props.match.params.slug ? <Products page={this.props.match.params.page} url={this.props.match.url} products={this.props.products}/>:
                       this.props.match.params.slug === 'edit' && this.props.match.params.id ?  <ProductEdit  error={this.props.error} editProduct={this.onEditSubmit} product={this.props.products ? this.props.products.filter(item => item.id == this.props.match.params.id ) : null}/> :
                       this.props.match.params.slug === 'add' ? <ProductNew  error={this.props.error} addProduct={this.onAddSubmit}/> : null;

        let paginator = this.props.paginator.total_page > 1 ? <Paginator onGetPageProducts={this.onGetPageProducts} paginator={this.props.paginator}/> : null;

        return (
            <>
                {product}
                {!this.props.match.params.slug && paginator}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: getProductsSelectors(state),
        paginator: getPaginatorSelector(state),
        error: getErrorSelector(state),
    }
};


export default compose(
    connect(mapStateToProps, {getProducts, addProduct, editProduct}),
    withRouter,
)(ProductsContainer);
