import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "../../entities";

const rootReducer = combineReducers({
    user: userReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
