import { createSelector } from 'reselect';

export const getSendSelectors = (state) => {
    return state.messagePublic.send;
}
