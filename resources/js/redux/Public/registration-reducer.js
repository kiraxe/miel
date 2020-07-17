import {authClientAPI} from "../../api/api";
import {login} from "../auth-reducer";
const ADD_CLIENTELE = 'ADD_CLIENTELE';


let initialState = {
    clientele: {},
    error: null
}


let registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CLIENTELE: {
            return {
                ...state,
                clientele: {...action.data.data},
                error: action.data.error
            }
        }
        default:
            return state
    }
};

export const addClienteleAC = (data, error) => ({type: ADD_CLIENTELE, data: {data, error}});


export const addClient = (clientele) => async dispatch => {

    let response = await authClientAPI.registration(clientele);

    console.log(response);

    if (response.success) {
        let promise = dispatch(login(clientele.login, clientele.password, clientele.type));

        Promise.all([promise])
            .then(() => {
                dispatch(addClienteleAC([response.data], null));
            })
    } else if (!response.data.success) {
        dispatch(addClienteleAC([], response.data.message));
    }
};

export default registrationReducer;
