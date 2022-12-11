import './index.css'

import React from 'react';

import { useAppSelector } from '../../hooks/redux';
import { status } from '../../types';

interface ItemBoard {
    header: status
}

export const ItemBoard = (props: ItemBoard): JSX.Element => {
    const { header } = props
    const tasks = useAppSelector(state => state.tasks.tasks)

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>, status: status, id: number): void => {
        e.preventDefault()
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        console.log(e);
    }

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        console.log(e);
    }

    const dragEndHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        console.log(e);
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>, status: status, id: number): void => {
        e.preventDefault()
        console.log(e);
    }


    return (
        <div className='board__item'>
            <div className='board__header'>
                {header}
            </div>
            <div className='board__display-data'>
                {tasks.filter(i => i.status === header).map(i => {
                    return (
                        <div key={i.id} className='board__task'
                            draggable
                            onDragOver={e => dragOverHandler(e, i.status, i.id)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragStart={e => dragStartHandler(e)}
                            onDragEnd={e => dragEndHandler(e)}
                            onDrop={e => dropHandler(e, i.status, i.id)}

                        >
                            {i.name}
                        </div>
                    )
                })}

            </div>
        </div>
    )
}




