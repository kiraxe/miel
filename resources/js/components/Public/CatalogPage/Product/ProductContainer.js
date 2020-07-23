import React, {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProduct} from "../../../../redux/Public/productPublic-reduser";
import {getProductSelectors, getInitializeSelectors} from "../../../../redux/Public/productPublic-selectors";
import Product from "./Product";
import Preloader from "../../../common/Preloader/Preloader";
import {getSettingsSelectors} from "../../../../redux/Public/public-selectors";



class AccountContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProduct(Number(this.props.productPage));
    }


    render() {

        if (!this.props.initialize) {
            return <Preloader/>
        }

        return <Product
            product={this.props.product}
            productPage={this.props.match.params.id}
            onPageHandler={this.props.onPageHandler}
            dropLeftNavigationRun={this.props.dropLeftNavigationRun}
            leftDropMenuHandler={this.props.leftDropMenuHandler}
            categories={this.props.categories}
            fromQuarterlyDate={this.props.settings.from}
            toQuarterlyDate={this.props.settings.to}
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
    connect(mapStateToProps, {getProduct})
)(AccountContainer);
