import React, { useEffect, useState } from 'react';
import { Todo } from '../types';

interface TodoListProps {
todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
const [draggedTodo, setDraggedTodo] = useState<Todo | null>(null);
const [dragOverTodo, setDragOverTodo] = useState<Todo | null>(null);
const [updatedTodos, setUpdatedTodos] = useState<Todo[]>(todos);

useEffect(() => {
    setUpdatedTodos(todos);
} , [todos])
const handleDragStart = (e: React.DragEvent<HTMLDivElement>, todo: Todo) => {
    setDraggedTodo(todo);
};

const handleDragOver = (e: React.DragEvent<HTMLDivElement>, todo: Todo) => {
    e.preventDefault();
    setDragOverTodo(todo);
};

const handleDragEnd = () => {
    if (!draggedTodo || !dragOverTodo || draggedTodo === dragOverTodo) return;

    const updatedTodoList = [...updatedTodos];
    const draggedIndex = updatedTodoList.findIndex((todo) => todo === draggedTodo);
    const dragOverIndex = updatedTodoList.findIndex((todo) => todo === dragOverTodo);

    updatedTodoList.splice(draggedIndex, 1);
    updatedTodoList.splice(dragOverIndex, 0, draggedTodo);

    setUpdatedTodos(updatedTodoList);
    setDraggedTodo(null);
    setDragOverTodo(null);
};

return (
    <div>
    {updatedTodos.map((todo, index) => (
        <div
        key={todo.id}
        draggable
        onDragStart={(e) => handleDragStart(e, todo)}
        onDragOver={(e) => handleDragOver(e, todo)}
        onDragEnd={handleDragEnd}
        style={{
            border: '1px solid #ccc',
            margin: '4px',
            padding: '8px',
            backgroundColor: draggedTodo === todo ? '#f0f0f0' : 'white',
        }}
        >
        {todo.title}
        </div>
    ))}
    </div>
);
};

export default TodoList;
