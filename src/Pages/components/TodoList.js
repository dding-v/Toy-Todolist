import React from "react";
import Todoitem from "./Todoitem";
import "./TodoList.css";

const TodoList = ({
  todos,
  onCheckToggle,
  onInsertToggle,
  onChangesetSelectedTodo,
}) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <Todoitem
          todo={todo}
          key={todo.id}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangesetSelectedTodo={onChangesetSelectedTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
