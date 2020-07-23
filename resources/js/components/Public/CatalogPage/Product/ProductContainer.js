import React, {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProduct} from "../../../../redux/Public/productPublic-reduser";
import {getProductSelectors} from "../../../../redux/Public/productPublic-selectors";
import Product from "./Product";



class AccountContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProduct(Number(this.props.productPage));
    }


    render() {
        return <Product product={this.props.product}/>
    }
}

let mapStateToProps = (state) => {
    return {
        product: getProductSelectors(state)
    }


};

export default compose(
    withRouter,
    connect(mapStateToProps, {getProduct})
)(AccountContainer);
