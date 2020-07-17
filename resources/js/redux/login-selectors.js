import { createSelector } from 'reselect';


export const getEmailSelector = (state) => {
    return state.loginPage.email;
}

export const getPasswordSelector = (state) => {
    return state.loginPage.password;
}

export const getNewHandlerChange = (state) => {
    return state.loginPage.newHandlerChange;
}

export const getTypeSelector = (state) => {
    return state.loginPage.type;
}
