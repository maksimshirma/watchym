import { createAction, createSlice } from "@reduxjs/toolkit";
import operationsService from "../api";
import { accountsModel } from "../../Account";
import { toast } from "react-toastify";

export const operationsSlice = createSlice({
    name: "operations",
    initialState: {
        entities: null,
        isLoading: false,
        error: null,
        dataLoaded: false,
    },
    reducers: {
        operationsRequested: (state) => {
            state.isLoading = true;
        },
        operationsReceved: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
            state.dataLoaded = true;
        },
        operationsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            state.dataLoaded = false;
        },
        operationCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        operationUpdated: (state, action) => {
            state.entities = state.entities.map((operation) =>
                operation._id === action.payload._id ? action.payload : operation
            );
        },
        operationDeleted: (state, action) => {
            state.entities = state.entities.filter((operation) => operation._id !== action.payload);
        },
    },
});

const { actions } = operationsSlice;
const {
    operationsRequested,
    operationsReceved,
    operationsRequestFailed,
    operationCreated,
    operationUpdated,
    operationDeleted,
} = actions;

const operationCreateRequested = createAction("operations/operationCreateRequested");
const operationCreateFailed = createAction("operations/operationCreateFailed");
const operationUpdateRequested = createAction("operations/operationUpdateRequested");
const operationUpdateFailed = createAction("operations/operationUpdateFailed");
const operationDeleteRequested = createAction("operations/operationDeleteRequested");
const operationDeleteFailed = createAction("operations/operationDeleteFailed");

export const loadOperationsList = () => async (dispatch) => {
    dispatch(operationsRequested());
    try {
        const content = await operationsService.get();
        dispatch(operationsReceved(content));
    } catch (error) {
        dispatch(operationsRequestFailed(error.message));
    }
};

export const createOperation = (payload) => async (dispatch) => {
    dispatch(operationCreateRequested());
    try {
        const content = await operationsService.create(payload);
        toast.success("Операция успешно создана!");
        dispatch(accountsModel.loadAccountsList());
        dispatch(operationCreated(content));
    } catch (error) {
        toast.error(error.message);
        dispatch(operationCreateFailed(error.message));
    }
};

export const updateOperation = (payload) => async (dispatch) => {
    dispatch(operationUpdateRequested());
    try {
        const content = await operationsService.update(payload);
        toast.success("Операция успешно обновлена!");
        dispatch(accountsModel.loadAccountsList());
        dispatch(operationUpdated(content));
    } catch (error) {
        toast.error(error.message);
        dispatch(operationUpdateFailed());
    }
};

export const deleteOperation = (id) => async (dispatch) => {
    dispatch(operationDeleteRequested());
    try {
        const content = await operationsService.delete(id);
        if (!content) {
            toast.success("Операция успешно удалена!");
            dispatch(accountsModel.loadAccountsList());
            dispatch(operationDeleted(id));
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(operationDeleteFailed());
    }
};

export const getOperationsDataStatus = () => (state) => state.operations.dataLoaded;

export const getOperationsList = () => (state) => {
    if (state.operations.entities) {
        const arrayForSort = [...state.operations.entities];
        arrayForSort.sort((a, b) => (a.date < b.date ? 1 : -1));
        return arrayForSort;
    }
    return [];
};

export const getOperationById = (id) => (state) => {
    if (id) {
        return state.operations.entities ? state.operations.entities.find((operation) => operation._id === id) : null;
    }
    return null;
};

export const getOperationsByAccountId = (id) => (state) => {
    if (id) {
        return state.operations.entities
            ? state.operations.entities.filter((operation) => operation.account === id)
            : null;
    }
    return null;
};

export const operationsReducer = operationsSlice.reducer;
