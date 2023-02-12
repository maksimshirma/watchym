import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer, accountsReducer } from "../../entities";

const rootReducer = combineReducers({
    user: userReducer,
    accounts: accountsReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
