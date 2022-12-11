
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { taskReducer } from "./reducers/tasks";

const rootReducer = combineReducers({
    tasks: taskReducer

})

export const setupStore = () => configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']