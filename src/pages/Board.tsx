import React from 'react';

import { ItemBoard } from '../components/ItemBoard';

export const Board = (): JSX.Element => {
    return (
        <div className='container'>
            <ItemBoard header='Backlog' />
            <ItemBoard header='In Progress' />
            <ItemBoard header='Production' />
            <ItemBoard header='Review' />
        </div>
    )
}

