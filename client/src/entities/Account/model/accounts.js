import { createAction, createSlice } from "@reduxjs/toolkit";
import accountsService from "../api";

export const accountsSlice = createSlice({
    name: "accounts",
    initialState: {
        entities: null,
        isLoading: false,
        error: null,
        dataLoaded: false,
    },
    reducers: {
        accountsRequested: (state) => {
            state.isLoading = true;
        },
        accountsReceved: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
            state.dataLoaded = true;
        },
        accountsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            state.dataLoaded = false;
        },
        accountCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        accountUpdated: (state, action) => {
            state.entities = state.entities.map((account) =>
                account._id === action.payload._id ? action.payload : account
            );
        },
        accountDeleted: (state, action) => {
            state.entities = state.entities.filter((account) => account._id !== action.payload);
        },
    },
});

const { actions } = accountsSlice;
const { accountsRequested, accountsReceved, accountsRequestFailed, accountCreated, accountUpdated, accountDeleted } =
    actions;

const accountCreateRequested = createAction("accounts/accountCreateRequested");
const accountCreateFailed = createAction("accounts/accountCreateFailed");
const accountUpdateRequested = createAction("accounts/accountUpdateRequested");
const accountUpdateFailed = createAction("accounts/accountUpdateFailed");
const accountDeleteRequested = createAction("accounts/accountDeleteRequested");
const accountDeleteFailed = createAction("accounts/accountDeleteFailed");
const operateAccountRequested = createAction("accounts/operateAccountRequested");
const operateAccountFailed = createAction("accounts/operateAccountFailed");

export const loadAccountsList = () => async (dispatch) => {
    dispatch(accountsRequested());
    try {
        const content = await accountsService.get();
        dispatch(accountsReceved(content));
    } catch (error) {
        dispatch(accountsRequestFailed(error.message));
    }
};

export const createAccount = (payload) => async (dispatch) => {
    dispatch(accountCreateRequested());
    try {
        const content = await accountsService.create(payload);
        dispatch(accountCreated(content));
    } catch (error) {
        dispatch(accountCreateFailed(error.message));
    }
};

export const updateAccount = (payload) => async (dispatch) => {
    dispatch(accountUpdateRequested());
    try {
        const content = await accountsService.update(payload);
        dispatch(accountUpdated(content));
    } catch (error) {
        dispatch(accountUpdateFailed());
    }
};

export const deleteAccount = (id) => async (dispatch) => {
    dispatch(accountDeleteRequested());
    try {
        const content = await accountsService.delete(id);
        if (content === null) {
            dispatch(accountDeleted(id));
        }
    } catch (e) {
        dispatch(accountDeleteFailed());
    }
};

export const operateAccount = (operation, account) => async (dispatch) => {
    dispatch(operateAccountRequested());
    try {
        let newAmount = 0;
        if (operation.type === "income") {
            newAmount = operation.amount + account.amount;
        } else if (operation.type === "expense") {
            if (account.amount > operation.amount) {
                newAmount = account.amount - operation.amount;
            } else {
                dispatch(operateAccountFailed());
            }
        } else {
            dispatch(operateAccountFailed());
        }
        const content = await accountsService.update({ ...account, amount: newAmount });
        dispatch(accountUpdated(content));
    } catch (error) {
        dispatch(operateAccountFailed());
    }
};

export const getAccountsDataStatus = () => (state) => state.accounts.dataLoaded;
export const getAccountsList = () => (state) => state.accounts.entities;
export const getAccountById = (id) => (state) => {
    if (id) {
        return state.accounts.entities ? state.accounts.entities.find((account) => account._id === id) : null;
    }
    return null;
};
export const accountsReducer = accountsSlice.reducer;
