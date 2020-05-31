import React from "react";
import {initializeApp} from "../redux/app-reducer";
import {logout} from "../redux/auth-reducer";
import App from "./App";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from "redux";
import {getAppSelector, getIsLoggedInSelector} from "../redux/app-selectors";

let mapStateForProps = (state) => {
    return {
        app: getAppSelector(state),
        auth: getIsLoggedInSelector(state)
    }
};


const AppContainer = compose(
    withRouter,
    connect(mapStateForProps, {initializeApp, logout})
)(App);

export default AppContainer;
