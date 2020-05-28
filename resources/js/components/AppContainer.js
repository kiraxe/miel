import React from "react";
import {initializeApp} from "../redux/app-reducer";
import {logout} from "../redux/auth-reducer";
import App from "./App";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from "redux";

let mapStateForProps = (state) => {
    return {
        app: state.app,
        auth: state.auth.isLoggedIn
    }
};


const AppContainer = compose(
    withRouter,
    connect(mapStateForProps, {initializeApp, logout})
)(App);

export default AppContainer;
