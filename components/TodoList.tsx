import React, { useEffect } from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';
import { deleteTodo, reorderTodos } from '@/crud';

interface TodoListProps {
todos: Todo[];
handleDragEnd: (result: any) => void;
completeTodo: (id :string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, handleDragEnd, completeTodo }) => {
const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData('text/plain', index.toString());
};

const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
};

const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    const droppedIndex = parseInt(e.dataTransfer.getData('text/plain'));
    handleDragEnd({ source: { index: droppedIndex }, destination: { index } });
};

useEffect(() => {
    console.log("todos")
}, [todos])

return (
    <div>
    {todos.map((todo, index) => (
        // <div
        // key={todo.id}
        // draggable
        // onDragStart={(e) => handleDragStart(e, index)}
        // onDragOver={(e) => handleDragOver(e, index)}
        // onDrop={(e) => handleDrop(e, index)}
        // style={{
        //     border: '1px solid #ccc',
        //     margin: '4px',
        //     padding: '8px',
        // }}
        // >
        // {todo.title}
        // </div>
        <div
            className="w-full"
            key={todo.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={(e) => handleDrop(e, index)}
        >
            <TodoItem
            completeTodo={() => completeTodo(todo.id)}
            todo={todo}
            />

    </div>
    ))}
    </div>
);
};

export default TodoList;
