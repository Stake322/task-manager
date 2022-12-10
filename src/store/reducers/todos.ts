import { createSlice } from '@reduxjs/toolkit'

export interface Todos {
    id: number,
    description: String,
    done: boolean,
    changeMode: boolean,
}

const initialTodo = {
    todos: [
        {
            id: 1, description: "Английский", done: false, changeMode: false,
        },
        {
            id: 2, description: "Видеоролик", done: false, changeMode: false,
        },
        {
            id: 3, description: "Просмотреть вакансии", done: false, changeMode: false,
        },
        {
            id: 4, description: "Сделать тодо лист", done: false, changeMode: false,
        },
    ]
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState: initialTodo,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ id: state.todos.length + 1, description: action.payload, done: false, changeMode: false })
        },
        deleteTodo: (state, action) => {
            state.todos = [...state.todos.filter(todo => todo.id !== action.payload)]
        },
        changeTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, description: action.payload.description, changeMode: false}
                }
                return todo
            })
        },
        changeStatus: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, done: !todo.done }
                }
                return todo
            })
        },
        toggleToChange: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, changeMode: !todo.changeMode }
                }
                return todo
            })
        }
    },
})

export const { addTodo, deleteTodo, changeTodo, changeStatus, toggleToChange } = todoSlice.actions

export default todoSlice.reducer