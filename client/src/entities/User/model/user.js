import { createSlice, createAction } from "@reduxjs/toolkit";
import { authService, localStorageService } from "../../../shared";
import userService from "../api";

const accessToken = localStorageService.getAccessToken();

// prettier-ignore
const initialState = accessToken
    ? {
        entities: null,
        isLoading: true,
        error: null,
        auth: { userId: accessToken },
        isLoggedIn: true,
        dataLoaded: false,
    }
    : {
        entities: null,
        isLoading: false,
        error: null,
        auth: null,
        isLoggedIn: false,
        dataLoaded: false,
    };

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userRequested: (state) => {
            state.isLoading = true;
        },
        userReceved: (state, action) => {
            state.entities = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
            state.dataLoaded = true;
        },
        userRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            state.dataLoaded = false;
        },
        authRequested: (state) => {
            state.error = null;
        },
        authRequestSuccessed: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        userSignedOut: (state) => {
            state.entities = null;
            state.isLoggedIn = false;
            state.auth = null;
            state.dataLoaded = false;
        },
        userUpdated: (state, action) => {
            state.entities = action.payload;
        },
    },
});

const { actions } = userSlice;
const {
    userRequested,
    userReceved,
    userRequestFailed,
    authRequestSuccessed,
    authRequestFailed,
    userSignedOut,
    userUpdated,
    authRequested,
} = actions;

const userUpdateRequested = createAction("users/userUpdateRequested");
const userUpdateFailed = createAction("users/userUpdateFailed");

// prettier-ignore
export const signUp =
    (payload) =>
        async (dispatch) => {
            dispatch(authRequested());
            try {
                const data = await authService.register(payload);
                localStorageService.setTokens(data);
                dispatch(authRequestSuccessed({ userId: data.userId }));
            } catch (error) {
                dispatch(authRequestFailed(error.response.data.error));
            }
        };

// prettier-ignore
export const signIn =
    (payload) =>
        async (dispatch) => {
            dispatch(authRequested());
            try {
                const data = await authService.login(payload);
                localStorageService.setTokens(data);
                dispatch(authRequestSuccessed({ userId: data.userId }));
            } catch (error) {
                dispatch(authRequestFailed(error.response.data.error));
            }
        };

export const signOut = () => (dispatch) => {
    localStorageService.removeAuthData();
    dispatch(userSignedOut());
};

export const updateUser = (payload) => async (dispatch) => {
    dispatch(userUpdateRequested());
    try {
        const data = await userService.edit(payload);
        dispatch(userUpdated(data));
    } catch (error) {
        dispatch(userUpdateFailed());
    }
};

export const loadUser = () => async (dispatch) => {
    dispatch(userRequested());
    try {
        const data = await userService.get();
        dispatch(userReceved(data));
    } catch (error) {
        dispatch(userRequestFailed(error.message));
    }
};

export const getUser = () => (state) => state.user.entities;
export const getIsLoggedIn = () => (state) => state.user.isLoggedIn;
export const getUserDataStatus = () => (state) => state.user.dataLoaded;
export const getAuthError = () => (state) => state.user.error;

export const userReducer = userSlice.reducer;
