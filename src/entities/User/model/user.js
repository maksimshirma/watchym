import { createAction, createSlice } from "@reduxjs/toolkit";
import { authService, localStorageService } from "../../../shared";
import userService from "../api/user.service";

const accessToken = localStorageService.getAccessToken();

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
        userRequestSuccessed: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
            state.dataLoaded = true;
        },
        userRequestFailed: (state, action) => {
            state.error = action.payload;
            state.dataLoaded = false;
        },
        authRequest: (state) => {
            state.error = null;
        },
        authRequestSuccessed: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        userCreated: (state, action) => {
            state.entities = action.payload;
        },
        userLoggedOut: (state) => {
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

const { reducer: userReducer, actions } = userSlice;
const {
    userRequested,
    userRequestSuccessed,
    userRequestFailed,
    authRequestSuccess,
    authRequestedFailed,
    userCreated,
    userLoggedOut,
    userUpdated,
    authRequested,
} = actions;

const userCreateRequested = createAction("users/userCreateRequested");
const userCreateFailed = createAction("users/userCreateFailed");
const userUpdateRequested = createAction("users/userUpdateRequested");
const userUpdateFailed = createAction("users/userUpdateFailed");

const createUser = (payload) => async (dispatch) => {
    dispatch(userCreateRequested());
    try {
        const { content } = await userService.create(payload);
        dispatch(userCreated(content));
    } catch (error) {
        dispatch(userCreateFailed(error.message));
    }
};

export const signUp =
    ({ email, password, ...rest }) =>
    async (dispatch) => {
        dispatch(authRequested());
        try {
            const data = await authService.register({ email, password });
            localStorageService.setTokens(data);
            dispatch(authRequestSuccess({ userId: data.localId }));
            dispatch(
                createUser({
                    _id: data.localId,
                    email,
                    image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
                        .toString(36)
                        .substring(7)}.svg`,
                    accounts: [],
                    ...rest,
                })
            );
        } catch (error) {
            dispatch(authRequestedFailed(error.message));
        }
    };

export const getUser = () => (state) => state.users.entities;

export default userReducer;
