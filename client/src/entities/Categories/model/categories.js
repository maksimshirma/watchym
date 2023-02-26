import { createAction, createSlice } from "@reduxjs/toolkit";
import categoriesService from "../api";

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        entities: null,
        isLoading: false,
        error: null,
        dataLoaded: false,
    },
    reducers: {
        categoriesRequested: (state) => {
            state.isLoading = true;
        },
        categoriesReceved: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
            state.dataLoaded = true;
        },
        categoriesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            state.dataLoaded = false;
        },
    },
});

const { actions } = categoriesSlice;
const { categoriesRequested, categoriesReceved, categoriesRequestFailed } = actions;

const categoryCreateRequested = createAction("categories/categoryCreateRequested");
const categoryCreated = createAction("categories/categoryCreateRequested");
const categoryCreateFailed = createAction("categories/categoryCreateFailed");

export const loadCategoriesList = () => async (dispatch) => {
    dispatch(categoriesRequested());
    try {
        const content = await categoriesService.get();
        dispatch(categoriesReceved(content));
    } catch (error) {
        dispatch(categoriesRequestFailed(error.message));
    }
};

export const createCategory = (payload) => async (dispatch) => {
    dispatch(categoryCreateRequested());
    try {
        const content = await categoriesService.create(payload);
        dispatch(categoryCreated(content));
    } catch (error) {
        dispatch(categoryCreateFailed(error.message));
    }
};

export const getCategoriesDataStatus = () => (state) => state.categories.dataLoaded;

export const getCategoriesList = () => (state) => {
    if (state.categories.entities) {
        const arrayForSort = [...state.categories.entities];
        arrayForSort.sort((a, b) => (a.date < b.date ? 1 : -1));
        return arrayForSort;
    }
    return [];
};

export const getCategoryById = (id) => (state) => {
    if (id) {
        return state.categories.entities ? state.categories.entities.find((category) => category._id === id) : null;
    }
    return null;
};

export const categoriesReducer = categoriesSlice.reducer;
