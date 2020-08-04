import { createSelector } from 'reselect';

export const getMessagesSelectors = (state) => {
    return state.messageAdmin.messages;
}

export const getMessagesErrorSelector = (state) => {
    return state.messageAdmin.error;
}

export const getMessagesPaginatorSelector = (state) => {
    return state.messageAdmin.paginator;
}
