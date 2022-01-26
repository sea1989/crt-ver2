import React, { useState, useEffect } from 'react';
import './style.css';

export default function AddTask({ addTask }) {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(userInput);
    setUserInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <section className='add-task'>
      <h2 className='visually-hidden'>Добавить задачу</h2>
      <form
        onSubmit={handleSubmit}
        className='add-task__form'
        aria-label='Форма добавления задачи'
      >
        <div className='add-task__input-wrapper'>
          <label for='add-task'>Новая задача</label>
          <input
            value={userInput}
            type='text'
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            name='task-name'
            id='add-task'
            placeholder='Название задачи...'
            required
          />
        </div>
        <button className='add-task__button button' type='submit'>
          <span>Добавить</span>
        </button>
      </form>
    </section>
  );
}
