import React, { Component} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from 'react-router-dom';
import {getSettingsSelectors, getInitializeSelectors} from "../../redux/Public/public-selectors";
import {getCategoriesSelectors} from "../../redux/Public/index-selectors"
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import MainContainer from './IndexPage/MainContainer'
import Footer from "./Footer/Footer";
import {getPublic} from "../../redux/Public/public-reducer"
import Preloader from "../common/Preloader/Preloader";
import {getIndexPage} from "../../redux/Public/index-reducer";
import Popup from "./Popup/Popup";


class PublicContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dropMenu: false,
            leftDropMenu: false,
            dropLeftNavigationRun: false
        }
    }

    componentDidMount() {
        this.props.getPublic();
        this.props.getIndexPage();
    }

    dropMenuHandler = e => {
        if (this.state.dropMenu) {
            this.setState({
                dropMenu: false
            })
        } else {
            this.setState({
                dropMenu: true
            })
        }
    }

    leftDropMenuHandler = e => {
        if (this.state.leftDropMenu) {
            this.setState({
                leftDropMenu: false
            })
        } else {
            this.setState({
                leftDropMenu: true
            })
        }
    }



    render() {

        if (!this.props.initialize) {
            return <Preloader/>
        }

        return (
            <>
            <main id="public">
                <Navbar categories={this.props.categories} leftDropMenuHandler={this.leftDropMenuHandler} leftDropMenu={this.state.leftDropMenu} dropMenu={this.state.dropMenu}/>
                <div id="wrapper">
                    <Header dropMenuHandler={this.dropMenuHandler} phone={this.props.settings.phone}/>
                    <MainContainer/>
                    <Footer phone={this.props.settings.phone} social={this.props.settings.social}/>
                </div>
            </main>
            <Popup/>
            </>
            )
    }
}

let mapStateToProps = (state) => {
    return {
        settings: getSettingsSelectors(state),
        categories: getCategoriesSelectors(state),
        initialize: getInitializeSelectors(state)
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {getPublic, getIndexPage})
)(PublicContainer);
