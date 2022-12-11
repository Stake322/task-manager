import './App.css';

import React, { useState } from 'react';

import { Header } from './components/Header';
import { ModalWindow } from './components/ModalWindow';
import { Board } from './pages/Board';

function App() {

  const [open, setOpen] = useState(false)

  const openModal = (): void => setOpen(true)
  const closeModal = (): void => setOpen(false)

  return (
    <>
      <Header openModal={openModal} />
      <ModalWindow open={open} closeModal={closeModal}>
        aboba
      </ModalWindow>
      <Board />
    </>

  );
}

export default App;
