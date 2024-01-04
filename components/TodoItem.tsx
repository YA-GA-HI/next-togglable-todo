import React, { DetailedHTMLProps, InputHTMLAttributes, MouseEventHandler } from 'react';
import { Todo } from '../types'; // Define Todo type in types.ts

interface TodoItemProps {
todo: Todo;
completeTodo: MouseEventHandler<HTMLInputElement>;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, completeTodo }) => {
return (
    <div
        className='flex items-center 
        rounded-md p-3 bg-violet-200
        mx-auto my-2'
        >
        <input onClick={completeTodo} type="checkbox" 
        checked={todo.completedAt !== null && todo.completedAt !== undefined }
        className='w-4 h-4 accent-yellow-300'/>
        <span className={`px-2 ${todo.completedAt ? 'line-through text-gray-500' : 'text-gray-900'}`}>
            {todo.title}
        </span>
        
    </div>
);
};

export default TodoItem;
