import React from 'react';
import { Todo } from '../types';

interface TodoListProps {
todos: Todo[];
handleDragEnd: (result: any) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, handleDragEnd }) => {
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

return (
    <div>
    {todos.map((todo, index) => (
        <div
        key={todo.id}
        draggable
        onDragStart={(e) => handleDragStart(e, index)}
        onDragOver={(e) => handleDragOver(e, index)}
        onDrop={(e) => handleDrop(e, index)}
        style={{
            border: '1px solid #ccc',
            margin: '4px',
            padding: '8px',
        }}
        >
        {todo.title}
        </div>
    ))}
    </div>
);
};

export default TodoList;
