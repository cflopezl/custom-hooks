
import { useEffect } from "react";
import { useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer( todoReducer, [], init);

    // cuando los "todos" cambian, es necesario guardar sus datos 
    // asi que esto sera manejado por medio de un useEffect, 
    // pero tiene un problema porque tambien se lanza la primera vez cuando el arreglo esta vacio
    // esto se arregla con la tercera funcion del useReducer el "init"
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }
        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch( {
            type: '[TODO] Delete todo',
            payload: id
        } );
    }

    const handleToggleTodo = ( id ) => {
        dispatch( {
            type: '[TODO] Toggle todo',
            payload: id
        } );
    }

  return { todos, 
            todosCount: todos.length,
            pendingTodosCount: (todos.filter(todo=>!todo.done)).length,
            handleNewTodo, 
            handleDeleteTodo, 
            handleToggleTodo };

}
