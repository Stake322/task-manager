import './index.css'

import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getId } from '../../utils';
import { item, Task, taskActions } from './../../store/reducers/tasks'

export const ItemBoard = (): JSX.Element => {
    const { changeStatus, addTask } = taskActions;
    // const tasks = useAppSelector(state => state.tasks.tasks)

    const [tasks, setTasks] = useState<Task[]>([

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
    ])

    useEffect(() => {
        console.log('task change', tasks);
    }, [tasks])
    const dispatch = useAppDispatch()

    const [currentBoard, setCurrentBoard] = useState<Task | null>(null)
    const [currentItem, setCurrentItem] = useState<item | null>(null)

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>,): void => {
        const target = e.target as HTMLElement
        e.preventDefault()
        if (target.className == 'board__task') {
            target.style.boxShadow = '0 2px 3px red'
        }
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        // console.log(e);
        const target = e.target as HTMLElement
        target.style.boxShadow = 'none'

    }

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, board: Task, item: item): void => {
        // console.log(e);
        console.log('itemDrag', item);
        console.log('boardDrag', board);
        setCurrentBoard(board)
        setCurrentItem(item)
    }

    const dragEndHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        // console.log(e);
        e.preventDefault()
        console.log(' drop END', e);
        const target = e.target as HTMLElement
        target.style.boxShadow = 'none'

    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>, board: Task, item: item): void => {
        e.preventDefault()
        // change mestami items === > all logic to reducers
    }
    const dropCardHandler = (e: React.DragEvent<HTMLDivElement>, board: Task,): void => {
        // console.log('itemDrop', item);
        console.log('boarDrop', board);
        e.preventDefault()
        if (currentBoard && currentItem) {
            // dispatch(addTask({ board, currentItem }))
            board.items.push(currentItem)
            const currentIndex = currentBoard.items.indexOf(currentItem)
            currentBoard.items.splice(currentIndex, 1)
            // dispatch(changeStatus({ board, currentBoard }))
            setTasks(tasks.map(task => {
                if (task.id === board.id) {
                    console.log('i am here');
                    return board
                }
                if (task.id === currentBoard.id) {
                    console.log('i am here 2');
                    return currentBoard
                }
                console.log('i am here 3');
                return task
            }))
        }
        const target = e.target as HTMLElement
        target.style.boxShadow = 'none'
    }


    return (
        <div className='board__item container'>
            {tasks.map(board => (
                <div
                    key={board.id}
                    onDragOver={e => dragOverHandler(e)}
                    onDrop={e => dropCardHandler(e, board)}

                >
                    <div className='board__header'>
                        {board.status}
                    </div>
                    <div className='board__display-data'>
                        {board.items.map((item: item) => {
                            return (
                                <div key={item.id} className='board__task'
                                    draggable
                                    onDragOver={e => dragOverHandler(e)}
                                    onDragLeave={e => dragLeaveHandler(e)}
                                    onDragStart={e => dragStartHandler(e, board, item)}
                                    onDragEnd={e => dragEndHandler(e)}
                                    onDrop={e => dropHandler(e, board, item)}

                                >
                                    {item.name}
                                    <span>{item.description}</span>
                                    <span>{item.SP}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}




