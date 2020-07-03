import { createSelector } from 'reselect';

export const getSettingsSelectors = (state) => {
    return state.settingsAdmin.settings;
}

export const getErrorSelector = (state) => {
    return state.settingsAdmin.error;
}

