import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { status } from '../../types';

export interface Column {
    id: number,
    status: string,
}
interface initialTasks {
    columns: Column[]
}

const initialStateColumn: initialTasks = {
    columns: [
        {
            id: 1, status: 'Backlog',
        },
        {
            id: 2, status: 'In Progress',
        },
        {
            id: 3, status: 'Production',
        },
        {
            id: 4, status: 'Review',
        },
    ]
}
export const columnSlice = createSlice({
    name: 'column',
    initialState: initialStateColumn,
    reducers: {
        addColumn: (state, action: PayloadAction<{ name: status }>) => {
            state.columns.push({ id: state.columns.length + 1, status: action.payload.name })
        },

    },
})

export const { actions: columnActions, reducer: columnReducer } = columnSlice;