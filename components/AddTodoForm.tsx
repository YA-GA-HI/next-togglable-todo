import React, { useState } from 'react';
import { Todo } from '../types'; // Define Todo type in types.ts

interface AddTodoFormProps {
    addTodo: (title: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
const [title, setTitle] = useState('');

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(title);
    setTitle('');
};

return (
    <form onSubmit={handleSubmit} className='bg-white p-2 rounded-lg'>
    <input
        type="text"
        className='focus:outline-none px-2'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo..."
    />
    <button type="submit" className='bg-yellow-200 py-1 px-3 rounded-md'>Add</button>
    </form>
);
};

export default AddTodoForm;
