
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import todoReducer from "./reducers/todos";

const rootReducer = combineReducers({
    todo: todoReducer

})

export const setupStore = () => configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']