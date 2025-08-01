import React, { useContext, useEffect, useState } from "react";
import { contaxtTodos } from "../contaxt/contaxt";
import { FaCheckCircle } from "react-icons/fa";

const TodosContainer = () => {
  const list = useContext(contaxtTodos);

  // using aa localstorage to print data
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   const todoString = localStorage.getItem("todos");
  //   if (todoString) {
  //     const todos = JSON.parse(todoString);
  //     setList(todos);
  //   }
  // }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 flex items-center justify-center px-4 py-10">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl max-w-2xl w-full p-8 text-white">
        <h1 className="text-3xl font-bold text-center mb-6">
          🗂️ All Todo Items
        </h1>

        {list && list.length > 0 ? (
          <ul className="space-y-4">
            {list.map((item, index) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-white/20 p-4 rounded-lg border border-white/30 hover:bg-white/30 transition-all"
              >
                <div className="flex items-center space-x-3">
                  {item.isCompleted ? (
                    <FaCheckCircle className="text-green-400 text-lg" />
                  ) : (
                    <div className="w-4 h-4 border border-white rounded-full"></div>
                  )}
                  <span
                    className={`${
                      item.isCompleted
                        ? "line-through text-gray-300"
                        : "text-white"
                    } text-lg`}
                  >
                    {item.task}
                  </span>
                </div>
                <span className="text-sm text-gray-300">
                  {item.isCompleted ? "Completed" : "Pending"}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center text-gray-300 mt-10">
            No todos available 😴
          </div>
        )}
      </div>
    </div>
  );
};

export default TodosContainer;
