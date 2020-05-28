//React, React-> Component, ReactDOM
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
//React Router DOM
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from "../redux/redux-store";
import {Provider} from "react-redux";


/***********************/
/* REACT-DOM -> REN   DER */
/***********************/

import AppContainer from "./AppContainer";

if (document.getElementById('app')) {
    ReactDOM.render(
        <Router>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </Router>
        , document.getElementById('app'));
}
