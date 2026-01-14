import React from "react";
import { useTodo } from "../context/TodoContext";

const TodoForm = () => {
  const { addTodos, todoMsg, setTodoMsg } = useTodo();
  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        addTodos(e);
      }}
    >
      <div className="w-full flex gap-2">
        <input
          className="w-[80%] py-2 px-1 bg-slate-400 border-0 outline-0 rounded text-xl font-semibold "
          placeholder="Enter Your Todo"
          type="text"
          value={todoMsg}
          onChange={(e) => {
            setTodoMsg(e.target.value);
          }}
        />
        <button className="cursor-pointer bg-green-600 px-5 py-2  rounded text-xl">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
