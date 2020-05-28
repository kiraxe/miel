import {authAPI} from "../api/api";

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

export const getAuthUserData = (token, permission) => async (dispatch) => {
    let meData = await authAPI.me();
    if(!meData.data.error) {
        if (meData.data.user) {
            let {id, email, name} = meData.data.user;
            dispatch(setUserDataAC(id, email, name, true, permission, token, null, true))
        }
    }
};

export const login = (email, password) => async (dispatch) => {
    let response = await authAPI.login(email, password);
    if (!response.data.error) {
        let token = response.data.token;
        let permission = response.data.permission;
        localStorage.setItem('token', token);
        dispatch(getAuthUserData(token, permission))
    } else {
        dispatch(setUserDataAC(null, null, null, false, null, null, response.data.error, false))
    }

};

export const logout = () => async (dispatch) => {
   let response = await authAPI.logout();
   if (response.data.success) {
       localStorage.removeItem('token');
       dispatch(setUserDataAC(null, null, null, false, null, null, null, false))
   }
};


export default authReducer;
