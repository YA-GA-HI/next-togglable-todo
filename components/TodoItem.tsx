import React from 'react';
import { Todo } from '../types'; // Define Todo type in types.ts

interface TodoItemProps {
todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
return (
    <div>
    <span>{todo.title}</span>
    {/* Other todo details */}
    </div>
);
};

export default TodoItem;
