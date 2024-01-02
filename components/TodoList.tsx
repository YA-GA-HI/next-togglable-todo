
import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types'; // Define Todo type in types.ts

interface TodoListProps {
todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
return (
    <div>
    {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
    ))}
    </div>
);
};

export default TodoList;
