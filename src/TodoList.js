import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, changeComplete, onRemove }) {

  const changeDone = (id) => {
    changeComplete(id);
  }

  return (
    <ul>
      {todos.map(item => <TodoItem onRemove={onRemove} onChange={changeDone} key={item.id} {...item} />)}
    </ul>
  )
}