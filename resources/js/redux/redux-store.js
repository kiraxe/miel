import {applyMiddleware, combineReducers, createStore} from "redux";
import loginReducer from "./login-reducer";
import appReducer from "./app-reducer";
import adminReducer from "./admin-reducer"
import productsReducer from "./products-reducer";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import publicReducer from "./public-reducer";
import { reducer as formReducer } from 'redux-form'
import clienteleReducer from "./clientele-reducer";

let reducers = combineReducers({
    loginPage: loginReducer,
    app: appReducer,
    auth: authReducer,
    adminPage: adminReducer,
    productsAdmin: productsReducer,
    publicPage: publicReducer,
    clienteleAdmin: clienteleReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;
