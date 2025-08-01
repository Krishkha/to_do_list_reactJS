import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TodoList from "./Components/TodoList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import { contaxtTodos } from "./contaxt/contaxt";
import TodosContainer from "./Components/TodosContainer";

const App = () => {

  const [taskList, setTaskList] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar logo={"myTask"} />
          <TodoList taskList={taskList} setTaskList={setTaskList} />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar logo={"myTask"} />
          <About />
        </>
      ),
    },
    {
      path: "/contact",
      element:(
        <>
        <Navbar logo={"myTask"} />
        <ContactUs />
        </>
      )
    },
    {
      path:"/todoList",
      element:(
        <>
        <Navbar logo={"myTask"} />
        <TodosContainer />
        </>
      )
    }
  ]);
  return (
    <>
    <contaxtTodos.Provider value={taskList}>
      <RouterProvider router={router} />
    </contaxtTodos.Provider>
    </>
  );
};

export default App;
