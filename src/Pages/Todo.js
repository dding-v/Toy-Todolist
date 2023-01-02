import React, { useEffect, useState, useRef, ChangeEvent } from "react";
import "./Todo.css";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import { MdAddCircle } from "react-icons/md";
import TodoInsert from "./components/Todoinsert";

const Todo = () => {
  const [selectedTodo, setSelectedTodo] = useState([null]); // 내용
  const [insertToggle, setInsertToggle] = useState(false); // 토글

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "유닛 블로깅 하기",
      checked: true,
    },
    {
      id: 2,
      text: "저녁 요가 30분 하기",
      checked: false,
    },
    {
      id: 3,
      text: "코플릿 문제 복습하기",
      checked: true,
    },
    {
      id: 4,
      text: "노션 정리하기",
      checked: true,
    },
    {
      id: 5,
      text: "깃허브 링크 배포 하기",
      checked: false,
    },
    {
      id: 6,
      text: "자기 전에 일기 쓰기",
      checked: true,
    },
  ]);

  let nextId = todos.length + 1;

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
        id: new Date().getTime(),
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };

  // 체크
  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  // 체크 상태 변경
  const onChangesetSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  // 삭제
  const onRemove = (id) => {
    onInsertToggle();
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  // 수정
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
