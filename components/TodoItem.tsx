import React from 'react';
import { Todo } from '../types'; // Define Todo type in types.ts

interface TodoItemProps {
todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
return (
    <div
        className='lg:w-1/2 flex items-center mx-auto my-2 bg-gray-200'
        style={{
            border: '1px solid #ccc',
            padding: '8px',
        }}
        >
        <input type="checkbox" className='w-4 h-4'/>
        <span className="px-2">
            {todo.title}
        </span>
        
    </div>
);
};

export default TodoItem;
