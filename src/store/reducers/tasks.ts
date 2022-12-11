import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { status } from '../../types'
import { getId } from './../../utils/index';

export interface Task {
    id: number,
    name: string,
    description: string,
    SP: number,
    status: status,
}

interface initialTasks {
    tasks: Task[]
}

const initialStateTasks: initialTasks = {
    tasks: [
        {
            id: getId(), description: "Необходимо создать проект", name: "create project", SP: 0.5, status: 'In Progress'
        },
        {
            id: getId(), description: "Добавить в проект линтер", name: "add eslint", SP: 0.5, status: 'In Progress'
        },
        {
            id: getId(), description: "Добавить в проект redux tool kit", name: "add rtk", SP: 0.5, status: 'In Progress'
        },
        {
            id: getId(), description: "Использовать в проекте drag and drop events", name: "Use drag and drop", SP: 0.5, status: 'Backlog'
        },

    ]
}
export const taskSlice = createSlice({
    name: 'task',
    initialState: initialStateTasks,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push({
                id: state.tasks.length + 1,
                description: action.payload.description,
                name: action.payload.name,
                SP: action.payload.SP,
                status: 'Backlog',
            })
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        changeTask: (state, action: PayloadAction<Task>) => { //change types like {id: name: }
            const { id, description } = action.payload
            const taskChange = state.tasks.find(task => task.id === action.payload.id)
            if (!taskChange) return
            taskChange.description = description

        },
        changeStatus: (state, action: PayloadAction<Task>) => {
            state.tasks = state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    return { ...task, status: action.payload.status }
                }
                return task
            })
        },
    },
})

export const { actions: taskActions, reducer: taskReducer } = taskSlice;