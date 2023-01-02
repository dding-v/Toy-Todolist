import React from "react";

import "./App.css";
import Todo from "./Pages/Todo";

const App = () => {
  return (
    <div className="app_outer">
      <Todo onTodo={Todo} />
    </div>
  );
};

export default App;
