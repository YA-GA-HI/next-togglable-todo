"use client";
import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';
import { Todo } from '../types'; // Define Todo type in types.ts

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      title,
      createdAt: new Date(),
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  // CRUD operations and other functionality

  return (
    <div>
      <h1>Advanced Todo App</h1> 
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
