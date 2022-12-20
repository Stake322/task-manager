import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getId } from './../../utils/index';
import { Column } from './columns';

export type task = {
    name: string,
    description: string,
    SP: number,
    id: number,
    status: string
}
interface initialTasks {
    tasks: task[]
}

const initialStateTasks: initialTasks = {
    tasks: [
        {
            id: getId(), description: "Использовать в проекте drag and drop events", name: "Use drag and drop", SP: 0.5, status: 'Backlog',
        },
        {
            id: getId(), description: "Необходимо создать проект", name: "create project", SP: 0.5, status: 'In Progress'
        },
        {
            id: getId(), description: "Добавить в проект линтер", name: "add eslint", SP: 0.5, status: 'In Progress'
        },
        {
            id: getId(), description: "Добавить в проект redux tool kit", name: "add rtk", SP: 0.5, status: 'In Progress'
        },
    ]
}
export const taskSlice = createSlice({
    name: 'task',
    initialState: initialStateTasks,
    reducers: {
        addTask: (state, action: PayloadAction<{ name: string, description: string, sp: number, status: string }>) => {
            const { name, description, sp, status } = action.payload
            state.tasks.push({
                name, description, SP: sp, id: getId(), status
            })
        },
        changeStatus: (state, action: PayloadAction<{ currentItem: task, column: Column }>) => {
            const taskChange = state.tasks.find(task => task.id === action.payload.currentItem.id)
            if (!taskChange) return
            taskChange.status = action.payload.column.status
        },
    },
})

export const { actions: taskActions, reducer: taskReducer } = taskSlice;