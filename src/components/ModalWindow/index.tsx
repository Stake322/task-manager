import './index.css'

import React from 'react';
interface props {
    open: boolean;
    closeModal: () => void;
    children: React.ReactNode
}

export const ModalWindow = (props: props): JSX.Element => {
    const { open, closeModal, children } = props

    return (
        <>
            {open
                ? <div className='modal' onClick={closeModal}>
                    <div className="modal__content" onClick={e => e.stopPropagation()}>
                        {children}
                    </div >
                </div >
                : null}
        </>

    )
}


