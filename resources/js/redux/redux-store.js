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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

window.__store__ = store;

export default store;
