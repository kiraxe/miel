import React, {Component, useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import MainContent from './MainContent/MainContent';
import {getCategoriesSelectors, getPopularSelectors, getNoveltySelectors, getInitializeSelectros} from "../../../redux/Public/index-selectors";
import {getIndexPage} from "../../../redux/Public/index-reducer";
import {getSettingsSelectors} from "../../../redux/Public/public-selectors";
import {addCart} from '../../../redux/Public/cart-reducer';

class MainContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false
        }
    }

    componentDidMount() {
        //this.props.getIndexPage();
        //this.props.getPublic();
    }

    addCartHandler = (product) =>  {
        this.setState({isFetching: true})
        this.props.addCart(product);
        setTimeout(() => this.setState({isFetching: false}), 1000);
    }

    render() {
        return (
            <MainContent popUpOpen={this.props.popUpOpen} isFetching={this.state.isFetching} settings={this.props.settings} addCartHandler={this.addCartHandler} isLoggedIn={this.props.isLoggedIn} categories={this.props.categories} popular={this.props.popular} novelty={this.props.novelty}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        categories: getCategoriesSelectors(state),
        popular: getPopularSelectors(state),
        novelty: getNoveltySelectors(state),
        initialize: getInitializeSelectros(state),
        settings: getSettingsSelectors(state)
    }
};

export default compose(
    connect(mapStateToProps, {getIndexPage, addCart})
)(MainContainer);
