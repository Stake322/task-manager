
import { configureStore } from "@reduxjs/toolkit";

import { taskReducer } from "./reducers/tasks";

export const store = configureStore({
    reducer: {
        tasks: taskReducer
    },
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch