import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userModel, accountsModel, operationsModel, categoriesModel } from "../../entities";

const rootReducer = combineReducers({
    user: userModel.userReducer,
    accounts: accountsModel.accountsReducer,
    operations: operationsModel.operationsReducer,
    categories: categoriesModel.categoriesReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware({
            serializableCheck: false,
        }),
    });
}
