import { createSelector } from 'reselect';

export const getCategoriesSelectors = (state) => {
    return state.indexPagePublic.categories;
}

export const getPopularSelectors = (state) => {
    return state.indexPagePublic.popular;
}

export const getNoveltySelectors = (state) => {
    return state.indexPagePublic.novelty;
}

export const getInitializeSelectros = (state) => {
    return state.indexPagePublic.initialize;
}
