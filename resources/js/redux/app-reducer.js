import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
};

export const initializedSuccessAC = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let token = localStorage.getItem('token');
    let promise = dispatch(getAuthUserData(token));

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccessAC());
        })
};

export default appReducer;
