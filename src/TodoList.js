import React from 'react'
import TodoItem from './TodoItem'
import WithLoader from './WithLoader';

function TodoList({ todos, changeComplete, onRemove }) {

  const changeDone = (id) => {
    changeComplete(id);
  }

  return (
    <ul>
      {todos.map(item => <TodoItem onRemove={onRemove} onChange={changeDone} key={item.id} {...item} />)}
    </ul>
  )
}

export default WithLoader(TodoList);