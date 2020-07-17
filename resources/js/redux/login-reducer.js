const UPDATE_HANDLE_CHANGE = "UPDATE_HANDLE_CHANGE";

let initialState = {
    email: '',
    password: '',
    type: "api"
};


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_HANDLE_CHANGE: {
            return {
                ...state,
                ...action.body,
            };
        }
        default:
            return state;
    }
};


export const newHandlerChangeAC = (value) => ({type:UPDATE_HANDLE_CHANGE, body: value});

export const getHandler = (e) => (dispatch) => {
    dispatch(newHandlerChangeAC(e));
};

export default loginReducer;
