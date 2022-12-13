import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Sidebar";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Todo from "./Pages/Todo";
import Diary from "./Pages/Diary";

import "./App.css";
import "./global-style.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          {/* <Sidebar /> */}
          <section>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/diary" element={<Diary />} />
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
