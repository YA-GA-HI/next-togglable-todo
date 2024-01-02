import { Todo } from "./types";


export const createTodo = (title: string) => {
    const newTodo: Todo = {
    id: Math.ceil(Math.random() * 100000).toString(),
    title: title,
    createdAt: new Date(),
    completedAt: null,
    };
    const todos = readTodos();
    todos.push(newTodo)
    localStorage.setItem("todos", JSON.stringify(todos));
    return newTodo;
};





export const readTodos = () => {
    const localeStorageData = localStorage.getItem("todos");
    let todos = localeStorageData ? JSON.parse(localeStorageData) : [];
    return todos;
};




export const deleteTodos = ( id: string ) => {
    const todos = readTodos();
    for(let i =0; i<todos.length; i++)
    {
        const localTodo = todos[i];
        if(localTodo.id == id)
        {
            todos[i].completedAt = new Date();
        }
    }

    localStorage.setItem("todos", JSON.stringify(todos));
    return true;
};


export const reorderTodos = (orderType: string , todos: Todo[]) => {
    localStorage.setItem("order-type", orderType);
    localStorage.setItem("todos", JSON.stringify(todos));
    return true;
};

