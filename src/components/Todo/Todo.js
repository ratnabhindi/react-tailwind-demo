import React from "react";
import TodoApp from "./TodoApp";

function Todo() {
  return (
    <div className="bg-blue-100 flex flex-col justify-center items-center">
      <div className="p-4 max-w-md w-full bg-white rounded-xl shadow-md">
        <h1 className="text-xl font-semibold text-gray-800">Gratitude</h1>
        <p className="mt-2 text-gray-600">Great start to the day</p>
        <TodoApp />
      </div>
    </div>
  );
}

export default Todo;
