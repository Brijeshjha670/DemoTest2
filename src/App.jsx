import React, { useEffect, useState } from "react";
import TraficLight from "./Component/TraficLight/TraficLight";
import Explorer from "./Component/Explorer/Explorer";

// import { data } from "./constants/data";
import DetectScroll from "./Component/DetectScroll/DetectScroll";
import CollapsiblePanel from "./Component/CollapsiblePanel/CollapsiblePanel";
import TodoForm from "./Component/ToDoApp/TodoForm";
import TodoList from "./Component/ToDoApp/TodoList";
import Movable from "./Component/MovableDiv/Movable";

import {items} from "./constants/data"
import Dropdown from "./Component/DropDown/Dropdown";
import Timer from "./Component/Timer/Timer";


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
  };

  const updateTodo = (id, updateText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: updateText } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) =>todo.id !== id))
  }

  return (
    <>

    {/* <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
      </div> */}


      {/* <TraficLight/> */}
      {/* <Explorer data={data}/> */}
      {/* <DetectScroll/> */}

      {/* collapse wala start hai  */}

      {/* <CollapsiblePanel title = "Title1" initialCollapse={false}>
      <p>This is a content of the panel</p>
      </CollapsiblePanel>
      <CollapsiblePanel title = "Title1">
      <p>This is a content of the panel</p>
      </CollapsiblePanel> */}

      {/* collapse wala end hai  */}

      {/* <Movable/> */}

      {/* <Dropdown data={items}/> */}

      <Timer/>


    </>
  );
}

export default App;
