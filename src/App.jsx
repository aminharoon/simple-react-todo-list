import React, { useEffect, useState } from "react";
import { useTodo, TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [todoMsg, setTodoMsg] = useState("");
  const [todos, setTodos] = useState([]);
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todo"));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const addTodos = (e) => {
    e.preventDefault();
    if (todoMsg.length == 0) {
      alert("Please Enter The Todo First ❌");
    } else {
      const newTodo = {
        id: Date.now(),
        todo: todoMsg,
        isCompleted: false,
        isEdit: false,
      };
      setTodos((per) => [...per, newTodo]);
      setTodoMsg("");
    }
  };

  const handleDelete = (id) => {
    const deleted = todos.filter((eachTodo) => eachTodo.id != id);
    setTodos(deleted);
  };

  const isCompleatedToggle = (e, eachTodo) => {
    let checked = e.currentTarget.checked;
    const updatedTodo = {
      ...eachTodo,
      isCompleted: checked,
    };
    setTodos((per) =>
      per.map((echTodo) =>
        echTodo.id === updatedTodo.id ? updatedTodo : echTodo
      )
    );
  };

  const handleUpdataTodoText = (eachTodo) => {
    if (editedText.length === 0) {
      const editTodo = {
        ...eachTodo,
        isEdit: false,
      };
      setTodos((per) =>
        per.map((EachTodo) =>
          EachTodo.id === eachTodo.id ? editTodo : EachTodo
        )
      );
    } else {
      const editTodo = {
        ...eachTodo,
        todo: editedText,
        isEdit: false,
      };
      setTodos((per) =>
        per.map((EachTodo) =>
          EachTodo.id === eachTodo.id ? editTodo : EachTodo
        )
      );
      setEditedText("");
    }
  };

  const handleEditInput = (Todo) => {
    const edit = {
      ...Todo,
      isEdit: true,
      isCompleted: false,
    };
    setTodos((per) =>
      per.map((singleTodo) => (singleTodo.id === edit.id ? edit : singleTodo))
    );
  };

  return (
    <TodoProvider
      value={{
        todos,
        addTodos,
        handleDelete,
        handleEditInput,
        handleUpdataTodoText,
        isCompleatedToggle,
        todoMsg,
        setTodoMsg,
        editedText,
        setEditedText,
      }}
    >
      <div className="h-screen w-full bg-slate-600 p-4  ">
        <div className="bg-slate-500 flex flex-col justify-center items-center w-[400px] m-auto rounded gap-2 p-3">
          <h1 className="text-blue-100  text-xl font-semibold ">
            Total Todos : {todos.length}
          </h1>

          <TodoForm />
          <div className="flex flex-col gap-2 w-full max-h-[570px] overflow-y-auto scrollbar-hide">
            {todos.map((eachTodo) => (
              <TodoItem key={eachTodo.id} eachTodo={eachTodo} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
