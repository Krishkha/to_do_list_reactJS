import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { contaxtTodos } from "../contaxt/contaxt";
import TodosContainer from "./TodosContainer";

const TodoList = ({setTaskList,taskList}) => {
  const [task, setTask] = useState("");
  // const [taskList, setTaskList] = useState([]);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(taskList));
  };

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(todoString);
      setTaskList(todos);
    }
  }, []);

  const handleChange = (e) => {
    setTask(e.target.value);
    saveToLS();
  };

  const handleDelete = (e, id) => {
    let newlist = taskList.filter((item) => item.id !== id);
    setTaskList(newlist);
    saveToLS();
  };

  const handleAddtask = () => {
    if (task.trim() === "") return;
    setTaskList([...taskList, { id: uuidv4(), task, isCompleted: false }]);
    setTask("");
    saveToLS();
  };

  const handleEditTask = (e, id) => {
    let item = taskList.find((item) => item.id === id);
    setTask(item.task);
    let newlist = taskList.filter((item) => item.id !== id);
    setTaskList(newlist);
    saveToLS();
  };

  const handlecheckBox = (e) => {
    let id = e.target.name;
    let index = taskList.findIndex((item) => item.id === id);
    let newlist = [...taskList];
    newlist[index].isCompleted = !newlist[index].isCompleted;
    setTaskList(newlist);
    saveToLS();
  };

  return (
    <contaxtTodos.Provider value={taskList}>
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 flex items-center justify-center px-4 py-10">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl max-w-2xl w-full p-8 text-white">
          <h1 className="text-3xl font-bold text-center mb-6">
            📝 My Stylish To-Do List
          </h1>

          {/* Input Box */}
          <div className="flex items-center bg-white/20 rounded-lg overflow-hidden mb-6 border border-white/30">
            <input
              type="text"
              placeholder="Add a new task..."
              onChange={handleChange}
              value={task}
              className="w-full px-4 py-3 text-white bg-transparent placeholder-gray-300 focus:outline-none"
            />
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 transition-all"
              onClick={handleAddtask}
            >
              Add
            </button>
          </div>

          {/* Task List */}
          <ul className="space-y-4">
            {taskList.length === 0 && (
              <div className="text-center text-gray-200">
                No tasks found. Start by adding one! 🚀
              </div>
            )}
            {taskList.map((item, i) => (
              <li
                key={i}
                className="flex items-center justify-between bg-white/20 border border-white/30 p-4 rounded-lg hover:bg-white/30 transition-all"
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name={item.id}
                    className="w-5 h-5 accent-green-400"
                    onChange={handlecheckBox}
                    checked={item.isCompleted}
                  />
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

                <div className="flex space-x-2">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-lg"
                    onClick={(e) => handleEditTask(e, item.id)}
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <TodosContainer />
    </contaxtTodos.Provider>
  );
};

export default TodoList;
