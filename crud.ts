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

    console.log(JSON.parse(localStorage.getItem("todos")!))
    return newTodo;
};





export const readTodos = () => {
    const localeStorageData = localStorage.getItem("todos") ?? "[]";
    console.log(localeStorageData)
    let todos : Todo[] =  JSON.parse(localeStorageData!);
    // if(localeStorageData)
    // {
    //     try {
    //         JSON.parse(localeStorageData!);
    //     }
    //     catch(e) {
    //         console.log(e);
    //     }
    // }
    return todos;
};


export const completeOrInitiateTodo = ( id: string ) => {
    const todos = readTodos();
    for(let i =0; i<todos.length; i++)
    {
        const localTodo = todos[i];
        if(localTodo.id == id)
        {
            if(localTodo.completedAt)
            {
                todos[i].completedAt = null;
            }
            else
            {
                todos[i].completedAt = new Date();
            }
        }
    }

    localStorage.setItem("todos", JSON.stringify(todos));
    return todos;
};


export const deleteTodo = ( id: string ) => {
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
    console.log(todos)
    return todos;
};


export const reorderTodos = (orderType: string , todos: Todo[]) => {
    localStorage.setItem("order-type", orderType);
    localStorage.setItem("todos", JSON.stringify(todos));
    return true;
};

