"use client";
import React, { useEffect, useState } from 'react';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';
import { Todo } from '../types'; // Define Todo type in types.ts
import { readTodos } from '@/crud';

const Home: React.FC = () => {
  
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todosLoaded, setTodosLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      const localStoragetTodos = readTodos();
      setTodos(localStoragetTodos);
      setTodosLoaded(true);
    }, 1000)
  }, []);

  
  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Math.ceil(Math.random() * 100000).toString(),
      title: title,
      createdAt: new Date(),
      completedAt: null,
    };
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // CRUD operations and other functionality

  return (
    <div>
      <h1>Advanced Todo App</h1> 
      { ! todosLoaded ?  "Not loaded" : (
        <>
          <AddTodoForm addTodo={addTodo} />
          <TodoList todos={todos} />
        </>
      ) }
      
    </div>
  );
};

export default Home;
