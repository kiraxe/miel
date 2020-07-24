import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import loginReducer from "./login-reducer";
import appReducer from "./app-reducer";
import adminReducer from "./admin-reducer"
import productsReducer from "./products-reducer";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'
import clienteleReducer from "./clientele-reducer";
import categoriesReducer from "./category-reducer";
import settingsReducer from "./settings-reducer";
import optionsReducer from "./option-reducer";
import publicReducer from "./Public/public-reducer";
import indexPageReducer from "./Public/index-reducer";
import registrationReducer from "./Public/registration-reducer";
import accountReducer from "./Public/account-reducer";
import catalogReducer from "./Public/catalog-reducer";
import productPublicReducer from "./Public/productPublic-reduser";
import catReducer from "./Public/cart-reducer";

let reducers = combineReducers({
    loginPage: loginReducer,
    app: appReducer,
    auth: authReducer,
    adminPage: adminReducer,
    productsAdmin: productsReducer,
    clienteleAdmin: clienteleReducer,
    categoriesAdmin: categoriesReducer,
    settingsAdmin: settingsReducer,
    optionsAdmin: optionsReducer,
    public: publicReducer,
    indexPagePublic: indexPageReducer,
    catalog: catalogReducer,
    accountPagePublic: accountReducer,
    registration: registrationReducer,
    productPublic: productPublicReducer,
    cartPublic: catReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

window.__store__ = store;

export default store;
