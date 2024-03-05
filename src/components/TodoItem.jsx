import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

function TodoItem({ todo }) {
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border-2 border-black rounded px-3 py-1.5 gap-x-3 shadow-lg shadow-black/50 duration-300  text-black ${
        todo.completed ? "" : "bg-black"
      }`}
    >
      {/* <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      /> */}
      <input
        type="text"
        className={`border outline-none w-full bg-transparent text-white rounded ${
          isTodoEditable ? "border-white px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="inline-flex w-8 h-8 rounded text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={toggleCompleted}
      >
        <span className="text-2xl">
          <FaCheck />
        </span>
      </button>
      <button
        className="inline-flex w-8 h-8 rounded text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? (
          <span className="text-2xl">
            <IoMdDownload />
          </span>
        ) : (
          <span className="text-2xl">
            <MdEdit />
          </span>
        )}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        <span className="text-2xl">
          <MdDelete />
        </span>
      </button>
    </div>
  );
}

export default TodoItem;
