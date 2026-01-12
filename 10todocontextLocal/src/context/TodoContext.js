import { createContext, useContext } from "react";

export const createTodo = createContext({
    todos : [{
        id: 1,
        todoMsg : "Todo Msg",
        completed : false
    }],
    addTodo : (todo) => {},
    editTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleComplete: (id) => {} 
})

export const useTodo = () => {
    return useContext(createTodo)
}

export const TodoProvider = createTodo.Provider
