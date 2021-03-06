import React, { useState, useEffect } from 'react'
import AddTask from './Add-task';
import TodoList from './TodoList'

export default function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=4")
      .then((response) => response.json())
      .then((json) => json.map((item) => ({ id: item.id, completed: false, title: item.title, subtitle: ((Math.random() - 0.75) >= 0) ? item.title : '' })))
      .then((json) => (setTodos(json)))
  }, [])

  const changeComplete = (id) => {
    const copyTodos = todos;

    const index = copyTodos.findIndex((item) => item.id === id)

    copyTodos[index].completed = !copyTodos[index].completed;

    setTodos(copyTodos);

    console.log(copyTodos[index].completed)
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        status: 'backlog',
        title: userInput,
        isCompleted: false,
      };

      setTodos((prevState) => {
        return [...prevState, newItem];
      });
    }
  };

  return (
    <div className="container">

      <header className='header'>
        <h1>Todo list</h1>
      </header>

      <AddTask addTask={addTask} />
      <TodoList changeComplete={changeComplete} todos={todos} onRemove={removeTask} />
    </div>
  );
}
