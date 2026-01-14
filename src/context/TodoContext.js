import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: Date.now(),
            todo: "Todo msg",
            isCompleted: false,
            isEdit: false
        }
    ],
    todoMsg: "",
    editedText: "",
    addTodos: (e) => { },
    handleDelete: (id) => { },
    isCompleatedToggle: (e, todo) => { },
    handleUpdataTodoText: (todo) => { },
    handleEditInput: (todo) => { },
    setTodoMsg: () => { },
    setEditedText: () => { }
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}
