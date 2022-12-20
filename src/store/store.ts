
import { configureStore } from "@reduxjs/toolkit";

import { columnReducer } from "./reducers/columns";
import { taskReducer } from "./reducers/tasks";

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        columns: columnReducer,
    },
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch