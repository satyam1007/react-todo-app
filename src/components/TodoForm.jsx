import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Your Task..."
        className="w-full border-2 shadow-lg shadow-black/50 border-black/50 rounded px-3 outline-none duration-150 bg-black/30 text-white py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="shadow-lg shadow-black/50 rounded ml-4 px-6 py-1 bg-black text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
