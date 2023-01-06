import './App.css';

import React, { ChangeEvent, useState } from 'react';

import { Header } from './components/Header';
import { ModalWindow } from './components/ModalWindow';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { Board } from './pages/Board';
import { taskActions } from './store/reducers/tasks';

function App() {

  const [open, setOpen] = useState(false)
  const columns = useAppSelector(state => state.columns.columns)

  const [taskInfo, setTaskInfo] = useState({
    name: '',
    description: '',
    sp: 0,
    status: 'Backlog'
  })
  const openModal = (): void => setOpen(true)
  const closeModal = (): void => setOpen(false)

  const { addTask } = taskActions;
  const dispatch = useAppDispatch()

  const onSave = (): void => {
    if (!taskInfo.name && !taskInfo.description && !taskInfo.sp) return
    dispatch(addTask(taskInfo))
    closeModal()
  }
  const onChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setTaskInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <Header openModal={openModal} />
      <ModalWindow open={open} closeModal={closeModal} onSave={onSave}>
        <div className='modal__new-task'>
          <label>name:</label>
          <input placeholder='enter name' name='name' value={taskInfo.name} onChange={onChangeInput} />
          <label>description:</label>
          <textarea placeholder='enter description' name='description' value={taskInfo.description} onChange={onChangeInput} />
          <label>SP:</label>
          <input type={'number'} placeholder='enter SP' name='sp' value={taskInfo.sp} onChange={onChangeInput} />
          <label>Status Task:</label>
          <select
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setTaskInfo(prev => ({ ...prev, status: e.target.value }))}
          >
            {columns.map(i => (
              <option key={i.id}>{i.status}</option>
            ))}
          </select>
        </div>
      </ModalWindow>
      <Board />
    </>

  );
}

export default App;
