import './index.css'

import React from 'react';
    
interface ItemBoard {
    header: 'Backlog' | 'In Progress' | 'Review' | 'Production'
}

export const ItemBoard = (props: ItemBoard): JSX.Element => {
    const { header } = props
    return (
        <div className='board__item'>
            <div className='board__header'>
                {header}
            </div>
            <div className='board__display-data'>
                <div className='board__task'>
                    Task
                </div>
            </div>
        </div>
    )
}

