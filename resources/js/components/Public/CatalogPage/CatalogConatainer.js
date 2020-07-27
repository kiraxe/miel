import React, {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getCategoriesSelectors, getNoveltySelectors} from "../../../redux/Public/index-selectors";
import {getProductsSelectors, getInitializeSelectors, getTotalProductSelectors} from "../../../redux/Public/catalog-selectors";
import {getCatalog} from "../../../redux/Public/catalog-reducer";
import CatalogPage from "./CatalogPage";
import ProductContainer from "./Product/ProductContainer";
import {getSettingsSelectors} from "../../../redux/Public/public-selectors";
import {addCart} from '../../../redux/Public/cart-reducer';



class AccountContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropLeftNavigationRun: false,
            offset: 0,
            limit: 2,
            isFetching: false

        }
    }

    addCartHandler = (product) =>  {
        this.setState({isFetching: true})
        this.props.addCart(product);
        setTimeout(() => this.setState({isFetching: false}), 1000);
    }

    componentDidMount() {
        if (!this.state.productPage) {
            let page = this.getPage();
            page ? this.props.getCatalog(page, this.state.offset, this.state.limit) : this.props.getCatalog(null, this.state.offset, this.state.limit);
        }
    }

    getPage = () => {
        let params = this.props.match.params.page;
        let category = this.props.categories ? this.props.categories.filter((item, key) => {
            let link = item.link.split('/');
            if (link[link.length - 1] === params) {
                return item;
            }
        }) : null;

        let page = category.length > 0 ? category[0].category_id : null;

        return page;
    }

    leftDropMenuHandler = page => {

        if (this.state.dropLeftNavigationRun) {
            this.setState({
                dropLeftNavigationRun: false
            })
        } else {
            this.setState({
                dropLeftNavigationRun: true
            })
        }
        this.props.getCatalog(page, this.state.offset, this.state.limit);
    }

    onLoadHandler = () => {
        let limit = this.state.limit < this.props.totalProduct ? this.state.limit + 1 : this.state.limit;
        let page = this.getPage();

        this.setState({
            limit: limit
        })

        this.props.getCatalog(page, this.state.offset, limit);
    }

    render() {

        let onPageHandler = (page) => {
            this.setState({
                initializeStop: false
            })
            this.props.getCatalog(page, this.state.offset, this.state.limit);
        }

        console.log(this.props.settings);

        return (
            <>
                { parseInt(this.props.match.params.id) && <ProductContainer
                    productPage={this.props.match.params.id}
                    onPageHandler={onPageHandler}
                    dropLeftNavigationRun={this.state.dropLeftNavigationRun}
                    leftDropMenuHandler={this.leftDropMenuHandler}
                    categories={this.props.categories}
                    isLoggedIn={this.props.isLoggedIn}
                /> ||
                <CatalogPage
                    isLoggedIn={this.props.isLoggedIn}
                    onPageHandler={onPageHandler}
                    dropLeftNavigationRun={this.state.dropLeftNavigationRun}
                    leftDropMenuHandler={this.leftDropMenuHandler}
                    categories={this.props.categories}
                    novelty={this.props.novelty}
                    initialize={this.props.initialize}
                    products={this.props.products}
                    onLoadHandler={this.onLoadHandler}
                    totalProduct={this.props.totalProduct}
                    settings={this.props.settings}
                    addCartHandler={this.addCartHandler}
                    isFetching={this.state.isFetching}
                />}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        novelty: getNoveltySelectors(state),
        categories: getCategoriesSelectors(state),
        products: getProductsSelectors(state),
        initialize: getInitializeSelectors(state),
        totalProduct: getTotalProductSelectors(state),
        settings: getSettingsSelectors(state)
    }


};

export default compose(
    withRouter,
    connect(mapStateToProps, {getCatalog, addCart})
)(AccountContainer);
