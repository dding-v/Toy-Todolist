import React, { useState } from "react";
import "./Todo.css";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import { MdAddCircle } from "react-icons/md";
import TodoInsert from "./components/Todoinsert";

let nextId = 7;

const Todo = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "유닛 블로깅 하기",
      checked: true,
    },
    {
      id: 2,
      text: "복습 블로깅 하기",
      checked: false,
    },
    {
      id: 3,
      text: "아침 스터디",
      checked: true,
    },
    {
      id: 4,
      text: "알고리즘 풀기",
      checked: true,
    },
    {
      id: 5,
      text: "크리스마스 준비하기",
      checked: false,
    },
    {
      id: 6,
      text: "14일 마곡 캠퍼스",
      checked: false,
    },
  ]);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle((prev) => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("할 일을 입력해 주세요.");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangesetSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onRemove = (id) => {
    onInsertToggle();
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onUpdata = (id, text) => {
    onInsertToggle();
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  return (
    <Template todoLength={todos.length}>
      <TodoList
        todos={todos}
        onCheckToggle={onCheckToggle}
        onInsertToggle={onInsertToggle}
        onChangesetSelectedTodo={onChangesetSelectedTodo}
      />
      <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && (
        <TodoInsert
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
          onRemove={onRemove}
          onUpdata={onUpdata}
        />
      )}
    </Template>
  );
};

export default Todo;


// import React from "react";

// import "./Main.css";

// const Main = (props) => {
//   return (
//     <section className="Main">
//       <div className="Main__container">
//         <div className="Main__wrapper">
//           <div className="Main__detail">
//             <p className="Main__datailName">React Aboussstsss</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Main;
