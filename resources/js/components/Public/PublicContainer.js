import React, { Component} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from 'react-router-dom';
import {getCategoriesSelectors, getSettingsSelectors} from "../../redux/Public/public-selectors";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import MainContent from "./IndexPage/MainContent/MainContent";
import Footer from "./Footer/Footer";
import {getPublic} from "../../redux/Public/public-reducer"

class PublicContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPublic();
    }

    render() {
        return (
            <main id="public">
                <Navbar/>
                <div id="wrapper">
                    <Header phone={this.props.settings.phone}/>
                    <MainContent categories={this.props.categories}/>
                    <Footer phone={this.props.settings.phone} social={this.props.settings.social}/>
                </div>
            </main>
            )
    }
}

let mapStateToProps = (state) => {
    return {
        settings: getSettingsSelectors(state),
        categories: getCategoriesSelectors(state),
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {getPublic})
)(PublicContainer);
