import React from 'react';

export const Header = ({ openModal }: { openModal: () => void }): JSX.Element => {
    return (
        <div className='header'>
            Header
            <button onClick={openModal}>Создать задачу</button>
        </div>
    )
}


