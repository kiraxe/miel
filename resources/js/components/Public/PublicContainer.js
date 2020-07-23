import React, { Component} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from 'react-router-dom';
import {getSettingsSelectors, getInitializeSelectors} from "../../redux/Public/public-selectors";
import {getCategoriesSelectors} from "../../redux/Public/index-selectors";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import MainContainer from './IndexPage/MainContainer';
import AccountContainer from './AccountPage/AccountContainer';
import Footer from "./Footer/Footer";
import {getPublic} from "../../redux/Public/public-reducer";
import {addClient} from "../../redux/Public/registration-reducer";
import {getErrorRegSelectors} from '../../redux/Public/registration-selectors';
import Preloader from "../common/Preloader/Preloader";
import {getIndexPage} from "../../redux/Public/index-reducer";
import {login, logout} from "../../redux/auth-reducer";
import Popup from "./Popup/Popup";
import {getErrorSelector, getIsLoggedInSelector, getPermissionSelectors} from "../../redux/auth-selectors";
import CatalogConatainer from "./CatalogPage/CatalogConatainer";


class PublicContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dropMenu: false,
            leftDropMenu: false,
            dropLeftNavigationRun: false,
            popUp: false
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

    popUpOpen = () => {
        this.setState({
            popUp: true
        })
    }

    popUpClose = () => {
        this.setState({
            popUp: false
        })
    }

    onLogout = () => {
        let type = localStorage.getItem('type');
        this.props.logout(type);
        this.props.history.push('/');
    }

    onAddSubmit = (formData) => {
        this.props.addClient(formData);
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

    onLogin = (formData) => {
        this.props.login(formData.login, formData.password, formData.type);
    }

    render() {

        if (!this.props.initialize) {
            return <Preloader/>
        }

        let arr = this.props.match.url.split('/');

        let className = !parseInt(this.props.match.params.id) ? arr[1] : 'item';

        return (
            <>
            <main id="public" className={className}>
                <Navbar categories={this.props.categories} leftDropMenuHandler={this.leftDropMenuHandler} leftDropMenu={this.state.leftDropMenu} dropMenu={this.state.dropMenu}/>
                <div id="wrapper">
                    <Header onLogout={this.onLogout} popUpOpen={this.popUpOpen} isLoggedIn={this.props.isLoggedIn} permission={this.props.permission} dropMenuHandler={this.dropMenuHandler} phone={this.props.settings.phone}/>
                    {this.props.match.path === "/" ? <MainContainer/> : this.props.match.path === "/account/:page?/" ? <AccountContainer/> : this.props.match.path === "/shop/:page?/:id?" ? <CatalogConatainer/> : null}
                    <Footer phone={this.props.settings.phone} social={this.props.settings.social}/>
                </div>
            </main>
            <Popup
                classNameElement={className} popUpClose={this.popUpClose} popUp={this.state.popUp} addClient={this.onAddSubmit} onLogin={this.onLogin} error={this.props.error} errorReg={this.props.errorReg} isLoggedIn={this.props.isLoggedIn} />
            </>
            )
    }
}

let mapStateToProps = (state) => {
    return {
        settings: getSettingsSelectors(state),
        categories: getCategoriesSelectors(state),
        initialize: getInitializeSelectors(state),
        error: getErrorSelector(state),
        errorReg: getErrorRegSelectors(state),
        isLoggedIn: getIsLoggedInSelector(state),
        permission: getPermissionSelectors(state)
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {getPublic, getIndexPage, addClient, login, logout})
)(PublicContainer);
