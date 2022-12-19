import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { status } from './../../types';
import { getId } from './../../utils/index';

export interface Task {
    id: 1 | 2 | 3 | 4,
    status: status,
    items: item[]
}
export type item = {
    name: string,
    description: string,
    SP: number,
    id: number
}
interface initialTasks {
    tasks: Task[]
}

const initialStateTasks: initialTasks = {
    tasks: [
        {
            id: 1, status: 'Backlog', items: [
                {
                    id: getId(), description: "Использовать в проекте drag and drop events", name: "Use drag and drop", SP: 0.5,
                }
            ]
        },
        {
            id: 2, status: 'In Progress', items: [
                {
                    id: getId(), description: "Необходимо создать проект", name: "create project", SP: 0.5,
                },
                {
                    id: getId(), description: "Добавить в проект линтер", name: "add eslint", SP: 0.5,
                },
                {
                    id: getId(), description: "Добавить в проект redux tool kit", name: "add rtk", SP: 0.5,
                },
            ]
        },
        {
            id: 3, status: 'Production', items: [],
        },
        {
            id: 4, status: 'Review', items: [],
        },
    ]
}
export const taskSlice = createSlice({
    name: 'task',
    initialState: initialStateTasks,
    reducers: {
        addTask: (state, action: PayloadAction<{ board: Task, currentItem: item }>) => {
            const taskChange = state.tasks.find(task => task.id === action.payload.board.id)
            if (!taskChange) return
            taskChange.items.push(action.payload.currentItem)
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        changeTask: (state, action: PayloadAction<Task>) => { //change types like {id: name: }
            // const { id, description } = action.payload
            // const taskChange = state.tasks.find(task => task.id === action.payload.id)
            // if (!taskChange) return
            // taskChange.description = description

        },
        changeStatus: (state, action: PayloadAction<{ board: Task, currentBoard: Task, item: item }>,) => {
            // let taskChange = state.tasks.find(task => task.id === action.payload.board.id)
            // if (!taskChange) return
            // taskChange = action.payload.board
            console.log('action.payload.board', action.payload.board);
            console.log('action.payload.currentBoard', action.payload.currentBoard);
            // work here  
            
            state.tasks.map(task => {
                if (task.id === action.payload.board.id) {
                    console.log('i am here');
                    return action.payload.board.items.push()
                }
                if (task.id === action.payload.currentBoard.id) {
                    console.log('i am here 2');
                    return action.payload.currentBoard
                }
                console.log('i am here 3');
                return task
            })
        },
    },
})

export const { actions: taskActions, reducer: taskReducer } = taskSlice;