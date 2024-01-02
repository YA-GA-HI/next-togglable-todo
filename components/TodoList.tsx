import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types';

interface TodoListProps {
todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
const [sortBy, setSortBy] = useState<'creation' | 'completion' | 'custom'>('creation');

const toggleSort = () => {
    setSortBy((prevSortBy) => {
    if (prevSortBy === 'creation') return 'completion';
    if (prevSortBy === 'completion') return 'custom';
    return 'creation';
    });
};

const sortedTodos = [...todos].sort((a, b) => {
    if (sortBy === 'creation') {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }
    if (sortBy === 'completion') {
    return Number(a.completed) - Number(b.completed);
    }
    // Add your custom sorting logic here
    return 0;
});

return (
    <div>
    <button onClick={toggleSort}>Toggle Order</button>
    {sortedTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
    ))}
    </div>
);
};

export default TodoList;
