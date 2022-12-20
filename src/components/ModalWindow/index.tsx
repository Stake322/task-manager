import './index.css'

import React from 'react';
interface props {
    open: boolean;
    closeModal: () => void;
    onSave: () => void;
    children: React.ReactNode
}

export const ModalWindow = (props: props): JSX.Element => {
    const { open, closeModal, onSave, children } = props

    return (
        <>
            {open
                ? <div className='modal' onClick={closeModal}>
                    <div className="modal__content" onClick={e => e.stopPropagation()}>
                        {children}
                        <div className='button__container'>
                            <button onClick={onSave}>SAVE</button>
                            <button onClick={closeModal}>CANCEL</button>
                        </div>
                    </div >
                </div >
                : null}
        </>

    )
}


