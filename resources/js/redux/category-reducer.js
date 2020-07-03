import {adminAPI} from "../api/api";

const SET_CATEGORIES = 'SET_CATEGORIES';
const DELETE_CATEGORY = 'DELETE_CATEGORY';
const ADD_CATEGORY = 'ADD_CATEGORY';
const EDIT_CATEGORY = 'EDIT_CATEGORY';

let initialState = {
    categories: [],
    paginator: {
        total_page : null,
        current_page : null,
        per_page : null,
    },
    select: [],
    error: null
}


let categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES: {
            return {
                ...state,
                categories: [...action.data.data],
                paginator: {
                    total_page: action.data.last_page,
                    current_page: action.data.current_page,
                    per_page: action.data.per_page
                },
                select:[...action.data.select]

            }
        }
        case DELETE_CATEGORY: {

            let categories = state.categories.filter(item => item.category_id !== action.data.category_id);

            return {
                ...state,
                categories: [...categories]
            }
        }
        case ADD_CATEGORY: {

            let categories = [];

            state.paginator.current_page === state.paginator.total_page ? categories = [...state.categories ,...action.data.data] : categories = [...state.categories];

            return {
                ...state,
                categories: categories,
                error: action.data.error
            }
        }
        case EDIT_CATEGORY: {

            let categories = state.categories.map(item => {
                if (item.category_id === action.data.category_id) {
                    item = action.data;
                }
                return item;
            });

            return {
                ...state,
                categories: [...categories]
            }
        }
        default:
            return state
    }
};




export const setCategoryAC = (data) => ({type: SET_CATEGORIES, data: data});
export const deleteCategoryAC = (data) => ({type: DELETE_CATEGORY, data: data});
export const addCategoryAC = (data, error) => ({type: ADD_CATEGORY, data: {data, error}});
export const editCategoryAC = (data) => ({type: EDIT_CATEGORY, data: data});

export const getCategory = (page) => async dispatch => {
    let response = await adminAPI.getCategories(page);
    if (response.success) {
        dispatch(setCategoryAC(response.data));
    }
};

export const deleteCategory = (id) => async dispatch => {
    let response = await adminAPI.deleteCategory(id);
    dispatch(deleteCategoryAC(response.data));
};

export const addCategory = (category) => async dispatch => {
    let response = await adminAPI.addCategory(category);
    if (response.success) {
        dispatch(addCategoryAC([response.data], null));
    } else {
        dispatch(addCategoryAC([], response.data.message));
    }
};

export const editCategory = (category, action, page) => async dispatch => {
    let response = await adminAPI.editCategory(category);
    dispatch(editCategoryAC(response.data));
    if (response && action) {
        response = await adminAPI.getCategories(page);
        if (response.success) {
            dispatch(setCategoryAC(response.data));
        }
    }
}

export default categoriesReducer;
