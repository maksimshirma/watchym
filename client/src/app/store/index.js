import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userModel, accountsModel, operationsModel } from "../../entities";
import { modalModel } from "../../features";

const rootReducer = combineReducers({
    user: userModel.userReducer,
    accounts: accountsModel.accountsReducer,
    operations: operationsModel.operationsReducer,
    modal: modalModel.reducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware({
            serializableCheck: false,
        }),
    });
}
