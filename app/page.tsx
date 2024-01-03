"use client";
import React, { useEffect, useState } from 'react';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';
import { Todo } from '../types';
import { completeOrInitiateTodo, createTodo, readTodos, reorderTodos } from '@/crud'; // Assuming CRUD functions are defined

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todosLoaded, setTodosLoaded] = useState(false);

  useEffect(() => {
    // Simulating data retrieval from localStorage
    setTimeout(() => {
      const localStorageTodos = readTodos();
      setTodos(localStorageTodos);
      setTodosLoaded(true);
    }, 1000);
  }, []);

  const addTodo = (title: string) => {
    const newTodo = createTodo(title);
    console.log("yeeh");
    console.log(newTodo)
    setTodos([...todos, newTodo]);
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const updatedTodos = Array.from(todos);
    const [reorderedItem] = updatedTodos.splice(result.source.index, 1);
    updatedTodos.splice(result.destination.index, 0, reorderedItem);

    reorderTodos("hh",updatedTodos);
    setTodos(updatedTodos);
  };

  const completeTodo = (id : string) => {
    const todos = completeOrInitiateTodo(id);
    reorderTodos("hhh",todos);
    console.log("deleted todo")
    setTodos(todos);
}

  return (
    <div className='w-screen'>
      <h1>Advanced Todo App</h1>
      {!todosLoaded ? (
        'Loading...'
      ) : (
        <>
          <AddTodoForm addTodo={addTodo} />
          <TodoList
          completeTodo={completeTodo}

          todos={todos} handleDragEnd={handleDragEnd} />
        </>
      )}
    </div>
  );
};

export default Home;
