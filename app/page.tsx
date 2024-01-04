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


    <div className="flex flex-wrap p-2">
      <div className="w-full lg:w-7/12">
        <div className="lg:w-8/12 mx-auto lg:pt-6">
          {!todosLoaded ? (
            'Loading...'
          ) : (
            <>
            <div className="flex">
              <button className="bg-yellow-200 py-1 px-3 rounded-md me-2">Completed</button>
              <button className="bg-yellow-200 py-1 px-3 rounded-md me-2">Completed</button>
              <button className="bg-yellow-200 py-1 px-3 rounded-md me-2">Completed</button>
            </div>
              <p className='my-3'>Change Todos Order by draging and droping them</p>
              <TodoList
              completeTodo={completeTodo}

              todos={todos} handleDragEnd={handleDragEnd} />
            </>
          )}

        </div>
      </div>
      <div className="w-full lg:w-5/12">
        <h1 className='mx-auto text-3xl my-4  text-center font-semibold'>Advanced Todo App</h1>
        <div className="mx-auto w-fit">
          <AddTodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default Home;
