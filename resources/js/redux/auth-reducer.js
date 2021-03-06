import {authAPI, publicAPI, authClientAPI} from "../api/api";
import {addCartClient} from "./Public/cart-reducer";
import {getAccount} from "./Public/account-reducer";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    name: null,
    isLoggedIn: false,
    permission: null,
    token: null,
    error: null,
    isFetching: false
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            };
        }
        default:
            return state

    }
};


export const setUserDataAC = (id, email, name, isLoggedIn, permission, token , error, isFetching) => ({type: SET_USER_DATA, data: {id, email, name, isLoggedIn, permission, token, error, isFetching}});

export const getAuthUserData = (token, permission, type) => async (dispatch) => {
    let meData = null;

    if (type === 'client') {
        meData = await authClientAPI.me();
    } else if (type === 'api') {
        meData = await authAPI.me();
    }
    if(meData && !meData.data.error) {
        if (meData.data.user) {
            let {id, email, name} = meData.data.user;
            dispatch(setUserDataAC(id, email, name, true, permission, token, null, true))
        }
    }
};

export const login = (email, password, type) => async (dispatch) => {
    let response = null;

    if (type === 'client') {
        response = await authClientAPI.login(email, password);
    } else if ( type === 'api') {
        response = await authAPI.login(email, password);
    }

    if (response && !response.data.error) {
        let token = response.data.token;
        let permission = response.data.permission;
        localStorage.setItem('token', token);
        localStorage.setItem('permission', permission);
        localStorage.setItem('type', type);

        if (permission === 'Client') {

            let promise = dispatch(getAuthUserData(token, permission, type))
            let promise1 = dispatch(getAccount(response.data.id));

            Promise.all([promise, promise1])
                .then(data => {
                    dispatch(addCartClient({
                        id: data[1].data.data.client.id,
                        name: data[1].data.data.client.name,
                        company: data[1].data.data.client.company,
                        phone: data[1].data.data.client.phone,
                        email: data[1].data.data.client.email,
                        addressK: data[1].data.data.client.addressK
                    }))
                })

        } else if (permission === 'Admin') {
            dispatch(getAuthUserData(token, permission, type));
        }


    } else {
        dispatch(setUserDataAC(null, null, null, false, null, null, response.data.error, false))
    }

};

export const logout = (type) => async (dispatch) => {
    let  response = null;

    if (type === 'api') {
        response = await authAPI.logout();
    } else if (type === 'client') {
        response = await authClientAPI.logout();
    }

    if (response.data.success) {
       localStorage.removeItem('token');
       localStorage.removeItem('permission');
       localStorage.removeItem('type');
       localStorage.removeItem('client');
       localStorage.removeItem('cart');
       dispatch(setUserDataAC(null, null, null, false, null, null, null, false))
    }
};


export default authReducer;
