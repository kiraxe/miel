import React, {Component, useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import MainContent from './MainContent/MainContent';
import {getCategoriesSelectors, getPopularSelectors, getNoveltySelectors, getInitializeSelectros} from "../../../redux/Public/index-selectors";
import {getIndexPage} from "../../../redux/Public/index-reducer";

class MainContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //this.props.getIndexPage();
        //this.props.getPublic();
    }

    render() {

        return (
            <MainContent isLoggedIn={this.props.isLoggedIn} categories={this.props.categories} popular={this.props.popular} novelty={this.props.novelty}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        categories: getCategoriesSelectors(state),
        popular: getPopularSelectors(state),
        novelty: getNoveltySelectors(state),
        initialize: getInitializeSelectros(state)
    }
};

export default compose(
    connect(mapStateToProps, {getIndexPage})
)(MainContainer);
