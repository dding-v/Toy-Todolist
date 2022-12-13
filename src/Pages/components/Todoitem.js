import React from "react";
import { BsCheck2, BsX } from "react-icons/bs";

import "./Todoitem.css";

const Todoitem = ({
  todo,
  onCheckToggle,
  onInsertToggle,
  onChangesetSelectedTodo,
}) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <BsCheck2
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <BsX
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
        <div
          className="text"
          onClick={() => {
            onChangesetSelectedTodo(todo);
            onInsertToggle();
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default Todoitem;
