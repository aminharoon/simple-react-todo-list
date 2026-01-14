import React from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({ eachTodo }) => {
  const {
    isCompleatedToggle,
    handleDelete,
    handleUpdataTodoText,
    handleEditInput,
    editedText,
    setEditedText,
  } = useTodo();
  return (
    <div
      key={eachTodo.id}
      className="w-full py-2 px-1 bg-slate-700 text-slate-100 rounded flex justify-between "
    >
      <div className="flex gap-2 justify-center items-center">
        <span>
          {" "}
          <input
            className="w-4 mt-[9px] h-4 accent-green-500 cursor-pointer rounded"
            type="checkbox"
            onChange={(e) => {
              isCompleatedToggle(e, eachTodo);
            }}
            checked={eachTodo.isCompleted}
          />
        </span>
        <p
          className={`whitespace-normal break-words  ${
            eachTodo.isCompleted
              ? "line-through text-slate-500 transition-colors duration-200"
              : ""
          } text-xl`}
        >
          {eachTodo.isEdit ? (
            <input
              className="border-0 outline-0 bg-slate-600 font-semibold text-slate-200 px-1 py-1 rounded "
              value={editedText}
              onChange={(e) => {
                setEditedText(e.target.value);
              }}
              type="text"
              placeholder="Edit Todo"
            />
          ) : (
            eachTodo.todo
          )}
        </p>
      </div>
      <div className="flex justify-center gap-2 items-center">
        <span className="text-xl cursor-pointer">
          {!eachTodo.isEdit ? (
            <span
              onClick={() => {
                handleEditInput(eachTodo);
              }}
            >
              {" "}
              <i class="ri-edit-line"></i>
            </span>
          ) : (
            <span
              onClick={() => {
                handleUpdataTodoText(eachTodo);
              }}
            >
              {" "}
              <i class="ri-save-line"></i>
            </span>
          )}
        </span>
        <button
          title="Delete"
          onClick={() => {
            handleDelete(eachTodo.id);
          }}
          className="cursor-pointer text-2xl text-red-500"
        >
          <i class="ri-close-line"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
