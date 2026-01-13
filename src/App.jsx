import React, { useEffect, useState } from "react";

const App = () => {
  const [todoMsg, setTodoMsg] = useState("");
  const [todos, setTodos] = useState([]);
  const [editedText, setEditedText] = useState("");
  const [editTodo, setEditTodo] = useState(false);

  const handleDelete = (id) => {
    const deleted = todos.filter((eachTodo) => eachTodo.id != id);
    setTodos(deleted);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todo"));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);
  const isCompleatedToggle = (e, id, eachTodo) => {
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
  const handleUpdataTodoText = (id, eachTodo) => {
    const editTodo = {
      ...eachTodo,
      todo: editedText,
    };
    setTodos((per) =>
      per.map((eachTodo) => (eachTodo.id === id ? editTodo : eachTodo))
    );
    setEditedText("");
  };

  return (
    <>
      <div className="h-screen w-full bg-slate-600 p-4  ">
        <div className="bg-slate-500 flex flex-col justify-center items-center w-[400px] m-auto rounded gap-2 p-3">
          <h1 className="text-blue-100  text-xl font-semibold ">
            Total Todos : {todos.length}
          </h1>
          <form
            className="w-full"
            onSubmit={(e) => {
              e.preventDefault();
              const newTodo = {
                id: Date.now(),
                todo: todoMsg,
                isCompleted: false,
                isEdit: false,
              };
              setTodos((per) => [...per, newTodo]);
              setTodoMsg("");
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
          <div className="flex flex-col gap-2 w-full max-h-[570px] overflow-y-auto scrollbar-hide">
            {todos.map((eachTodo) => (
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
                        isCompleatedToggle(e, eachTodo.id, eachTodo);
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
                        className="border-0 outline-0 bg-slate-600 font-semibold text-slate-200 px-1 py-1 rounded"
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
                          const edit = {
                            ...eachTodo,
                            isEdit: true,
                            isCompleted: false,
                          };
                          setTodos((pre) =>
                            pre.map((todo) =>
                              todo.id === edit.id ? edit : todo
                            )
                          );
                        }}
                      >
                        {" "}
                        <i class="ri-edit-line"></i>
                      </span>
                    ) : (
                      <span
                        onClick={() => {
                          const editText = {
                            ...eachTodo,
                            todo: editedText,
                            isEdit: false,
                          };
                          setTodos((per) =>
                            per.map((EachTodo) =>
                              EachTodo.id === editText.id ? editText : EachTodo
                            )
                          );
                          setEditedText("");
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
