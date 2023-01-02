import React, { useEffect, useState, useRef, ChangeEvent } from "react";
import "./Todo.css";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import { MdAddCircle } from "react-icons/md";
import TodoInsert from "./components/Todoinsert";

const Todo = () => {


  const [selectedTodo, setSelectedTodo] = useState([null]); // 내용
  const [insertToggle, setInsertToggle] = useState(false); // 토글
  // const [id, setId] = useState(0)
  // const isMount = useRef(true)
  // const [list, setList] = useState([])


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

  // const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   const newTodoTemp = {...todos, [e.target.name]: e.target.value}
  //   setTodos(newTodoTemp) // input value가 바뀔 때마다 새로운 todo를 set 해 준다
  // }

  // const addList = () => {
  //   if (todos.text) {
  //     const newList = todos.concat(todos)
  //     setList(newList)
  //     localStorage.setItem('todos', JSON.stringify(newList))
  //   }
  //   setTodos({...todos, text: ""})
  // }

  // useEffect (() => {
  //   const locallist = localStorage.getItem('todos')
  //   if (locallist) setList(JSON.parse(locallist))
  // })




  // useEffect(() => {
  //   if(!isMount.current) {
  //   localStorage.setItem('todos', JSON.stringify(todos))
  //   localStorage.setItem('id', id)
  //   }
  // }, [todos, id])

  // useEffect(() => {
  //   const localTodoList = localStorage.getItem('todos')
  //   console.log(localTodoList, JSON.parse(localTodoList))
  //   if (localTodoList) {
  //     setTodos(JSON.parse(localTodoList))
  //   }
  //   const localId = localStorage.getItem('id')
  //   if (localId) {
  //     setId(localId)
  //   }
  //   isMount.current = false
  // }, [])














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
