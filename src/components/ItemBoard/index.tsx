import './index.css'

import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Column } from '../../store/reducers/columns';
import { getId } from '../../utils';
import { task, taskActions } from './../../store/reducers/tasks'

export const ItemBoard = (): JSX.Element => {
    const { changeStatus, addTask } = taskActions;
    const tasks = useAppSelector(state => state.tasks.tasks)
    const columns = useAppSelector(state => state.columns.columns)
    const dispatch = useAppDispatch()

    const [currentColumn, setCurrentColumn] = useState<Column | null>(null)
    const [currentItem, setCurrentItem] = useState<task | null>(null)

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>,): void => {
        const target = e.target as HTMLElement
        e.preventDefault()
        if (target.className == 'board__task') {
            target.style.boxShadow = '0 2px 3px red'
        }
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        const target = e.target as HTMLElement
        target.style.boxShadow = 'none'

    }

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, column: Column, task: task): void => {
        setCurrentColumn(column)
        setCurrentItem(task)
    }

    const dragEndHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault()
        console.log(' drop END', e);
        const target = e.target as HTMLElement
        target.style.boxShadow = 'none'

    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>, column: Column, task: task): void => {
        e.preventDefault()
    }
    const dropCardHandler = (e: React.DragEvent<HTMLDivElement>, column: Column,): void => {
        e.preventDefault()
        if (currentColumn && currentItem) {
            dispatch(changeStatus({ currentItem, column }))
        }
        const target = e.target as HTMLElement
        target.style.boxShadow = 'none'
    }

    return (
        <div className='board__item container'>
            {columns.map(column => (
                <div
                    key={column.id}
                    onDragOver={e => dragOverHandler(e)}
                    onDrop={e => dropCardHandler(e, column)}

                >
                    <div className='board__header'>
                        {column.status}
                    </div>
                    <div className='board__display-data'>
                        {tasks.filter(i => i.status === column.status).map((task: task) => {
                            return (
                                <div key={task.id} className='board__task'
                                    draggable
                                    onDragOver={e => dragOverHandler(e)}
                                    onDragLeave={e => dragLeaveHandler(e)}
                                    onDragStart={e => dragStartHandler(e, column, task)}
                                    onDragEnd={e => dragEndHandler(e)}
                                    onDrop={e => dropHandler(e, column, task)}

                                >
                                    <span className='item__name'> {task.name}</span>
                                    <span className='item__description'>{task.description}</span>
                                    <span className='item__sp'>SP: {task.SP}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}




