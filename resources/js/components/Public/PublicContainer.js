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
import CartContainer from './CartPage/CartController';
import Footer from "./Footer/Footer";
import {getPublic} from "../../redux/Public/public-reducer";
import {addClient} from "../../redux/Public/registration-reducer";
import {getErrorRegSelectors} from '../../redux/Public/registration-selectors';
import Preloader from "../common/Preloader/Preloader";
import {getIndexPage} from "../../redux/Public/index-reducer";
import {login, logout} from "../../redux/auth-reducer";
import Popup from "./Popup/Popup";
import {
    getErrorSelector,
    getIsLoggedInSelector,
    getPermissionSelectors
} from "../../redux/auth-selectors";
import CatalogConatainer from "./CatalogPage/CatalogConatainer";
import {addCartClient, getCart, setOrderIdNull} from '../../redux/Public/cart-reducer'
import {getOrderIdSelectors} from '../../redux/Public/cart-selectros'


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
        this.props.getCart();
        if(this.props.isLoggedIn && this.props.permission === 'Client')
        {
            this.props.addCartClient(JSON.parse(localStorage.getItem('client')));
        }

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
        this.props.setOrderIdNull();
    }

    onLogout = () => {
        let type = localStorage.getItem('type');
        this.props.logout(type);
        setTimeout(() => this.props.history.push('/'), 2000);
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
                    {this.props.match.path === "/" && !!Object.keys(this.props.settings).length ? <MainContainer popUpOpen={this.popUpOpen} isLoggedIn={this.props.isLoggedIn}/> : this.props.match.path === "/account/:page?/" && !!Object.keys(this.props.settings).length ? <AccountContainer permission={this.props.permission} isLoggedIn={this.props.isLoggedIn} /> : this.props.match.path === "/shop/:page?/:id?" && !!Object.keys(this.props.settings).length ? <CatalogConatainer popUpOpen={this.popUpOpen} isLoggedIn={this.props.isLoggedIn}/> : this.props.match.path === "/basket" && !!Object.keys(this.props.settings).length ? <CartContainer isLoggedIn={this.props.isLoggedIn}/>: null}
                    <Footer phone={this.props.settings.phone} social={this.props.settings.social}/>
                </div>
            </main>
            <Popup
                settings={this.props.settings} orderId={this.props.orderId} classNameElement={className} popUpClose={this.popUpClose} popUp={this.state.popUp} addClient={this.onAddSubmit} onLogin={this.onLogin} error={this.props.error} errorReg={this.props.errorReg} isLoggedIn={this.props.isLoggedIn} />
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
        permission: getPermissionSelectors(state),
        orderId: getOrderIdSelectors(state)
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {getPublic, getIndexPage, addClient, login, logout, addCartClient, getCart, setOrderIdNull})
)(PublicContainer);
