import React, { useState } from 'react'
import PropTypes from 'prop-types';


export default function TodoItem({ title, id, completed, subtitle, onChange, onRemove }) {

  const [checked, setChecked] = useState(completed)

  const handleClick = () => {
    setChecked(!checked);
    onChange(id);
  }

  const handleRemove = () => {
    onRemove(id)
  }

  return (
    <li className={`todo ${checked ? "completed" : ''}`}>

      <label>

        <input
          type="checkbox"
          checked={checked}
          onChange={handleClick}
        />

        <span></span>

        <div className='title__wrapper'>
          <span className='title'>{title}</span>
          <span className='subtitle'>{subtitle}</span>
        </div>

      </label>

      <button onClick={handleRemove} className='button button__add'>del</button>
    </li>
  )
}

TodoItem.prototype = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}